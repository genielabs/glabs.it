/*
 * Copyright 2015-2017 G-Labs. All Rights Reserved.
 *         https://genielabs.github.io/zuix
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 *
 *  This file is part of
 *  zUIx, Javascript library for component-based development.
 *        https://genielabs.github.io/zuix
 *
 * @author Generoso Martello <generoso@martello.com>
 */

// common
const fs = require('fs');
const path = require('path');
const util = require('util');
// static-site
const Promise = require('es6-promise').Promise;
const swig = require('swig-templates');
const isMarkdown = require('../node_modules/static-site/lib/utils/is-markdown');
const markdownTag = require('../node_modules/static-site/lib/utils/markdown-tag');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const extras = require('swig-extras');
// zuix-render
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const markdown = MarkdownIt({
    html: true,
    langPrefix: '',
    highlight: function(code, lang) {
        const highlighted = lang ? hljs.highlight(lang, code) : hljs.highlightAuto(code);
        return highlighted.value;
    }
});

const filters = ['batch', 'groupby', 'nl2br', 'pluck', 'split', 'trim', 'truncate'];

filters.forEach(function(filter) {
    extras.useFilter(swig, filter);
});

function render(content) {
    return markdown.render(content);
}

swig.setTag('markdown', markdownTag.parse, markdownTag.compile, true, false);
swig.setExtension('markdown', render);
swig.setDefaults({cache: false});

extras.useTag(swig, 'switch');
extras.useTag(swig, 'case');

function swigTemplate(page) {
    let template = isMarkdown(page.file) ? markdown.render(page.content) : page.content;

    if (page.template) {
        const templatePath = path.join(this.sourcePath, page.template);
        const block = page.block || 'content';
        const wrapped = '{% block ' + block + '%}' + template + '{% endblock %}';
        template = '{% extends "' + templatePath + '" %}' + wrapped;
    }

    const html = swig.render(template, {
        filename: page.file,
        locals: page
    });

    return Promise.resolve({
        dest: page.dest,
        contents: html
    });
}


function parseHtml(sourceFolder, data) {
    if (data.file.endsWith('.html')) {
        const dom = new JSDOM(data.content, {runScripts: 'dangerously'});
        const nodeList = dom.window.document.querySelectorAll('[data-ui-include]');
        if (nodeList != null) {
            const zuixBundle = {
                viewList: [],
                styleList: [],
                controllerList: []
            };
            nodeList.forEach(function(el) {
                const path = el.getAttribute('data-ui-include');
                // HTML
                try {
                    let htmlFile = fs.readFileSync(sourceFolder + '/' + path + '.html').toString();
                    // TODO: recurse parseHtml(sourceFolder, htmlFile...)
                    if (el.getAttribute('data-ui-mode') === 'unwrap') {
                        // TODO: add HTML comment with file info
                        el.outerHTML = htmlFile;
                    } else {
                        htmlFile = util.format('<div data-ui-view="%s">\n%s\n</div>', path, htmlFile);
                        zuixBundle.viewList.push({path: path, content: htmlFile});
                    }
                } catch (e) {
                    // console.warn(e);
                }
                // CSS
                try {
                    let cssFile = fs.readFileSync(sourceFolder + '/' + path + '.css').toString();
                    if (el.getAttribute('data-ui-mode') === 'unwrap') {
                        // TODO: add // comment with file info
                        cssFile = util.format('\n<style id="%s">\n%s\n</style>\n', path, cssFile);
                        dom.window.document.querySelector('head').innerHTML += util.format('\n<!--{[%s]}-->\n%s', path, cssFile);
                    } else {
                        cssFile = util.format('\n<style id="%s">\n%s\n</style>\n', path,
                            wrapCss('[data-ui-component="' + path + '"]:not(.zuix-css-ignore)', cssFile));
                        zuixBundle.styleList.push({path: path, content: cssFile});
                    }
                } catch (e) {
                    // console.warn(e);
                }
            });
            let bundleString = '<!-- zUIx inline resource bundle -->';
            zuixBundle.viewList.forEach(function(v) {
                bundleString += util.format('\n<!--{[%s]}-->\n%s', v.path, v.content);
            });
            zuixBundle.styleList.forEach(function(s) {
                dom.window.document.querySelector('head').innerHTML += util.format('\n<!--{[%s]}-->\n%s', s.path, s.content);
            });
            dom.window.document.body.innerHTML += util.format('<div style="display:none">%s</div>', bundleString);
        }

        data.content = dom.serialize();
    }

    return swigTemplate(data)._result.contents;
}

function replaceBraces(html, callback) {
    const tags = new RegExp(/[^{}]+(?=})/g);
    let outHtml = '';
    let matched = 0;
    let currentIndex = 0;
    let result;
    while (result = tags.exec(html)) {
        if (typeof result[0] === 'string' && (result[0].trim().length === 0 || result[0].indexOf('\n') >= 0)) {
            const nv = html.substr(currentIndex, result.index-currentIndex)+result[0]+'}';
            outHtml += nv;
            currentIndex += nv.length;
            continue;
        }
        let value = '{'+result[0]+'}';
        if (typeof callback === 'function') {
            const r = callback(result[0]);
            if (r != null) {
                value = r;
                matched++;
            }
        }
        outHtml += html.substr(currentIndex, result.index-currentIndex-1)+value;
        currentIndex = result.index+result[0].length+1;
    }
    if (matched > 0) {
        outHtml += html.substr(currentIndex);
        return outHtml;
    }
    return null;
}
function wrapCss(wrapperRule, css) {
    const wrapReX = /((.*){([^{}]|((.*){([^}]+)[}]))*})/g;
    let wrappedCss = '';
    let ruleMatch;
    // remove comments
    css = css.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, '');
    do {
        ruleMatch = wrapReX.exec(css);
        if (ruleMatch && ruleMatch.length > 1) {
            const ruleParts = ruleMatch[2];
            if (ruleParts != null && ruleParts.length > 0) {
                const classes = ruleParts.split(',');
                let isMediaQuery = false;
                let k = 0;
                classes.forEach(function(v) {
                    if (v.replace(' ', '') === '.') {
                        // a single `.` means 'self' (the container itself)
                        // so we just add the wrapperRule
                        wrappedCss += '\n' + wrapperRule + ' ';
                    } else if (v.trim()[0] === '@') {
                        // leave it as is if it's an animation or media rule
                        wrappedCss += v + ' ';
                        if (v.trim().toLowerCase().startsWith('@media')) {
                            isMediaQuery = true;
                        }
                    } else {
                        // wrap the class name (v)
                        wrappedCss += '\n' + wrapperRule + '\n' + v + ' ';
                    }
                    if (k++ < classes.length - 1) {
                        wrappedCss += ', ';
                    }
                });
                if (isMediaQuery) {
                    const wrappedMediaQuery = wrapCss(wrapperRule, ruleMatch[1].substring(ruleMatch[2].length).replace(/^{([^\0]*?)}$/, '$1'));
                    wrappedCss += '{\n  '+wrappedMediaQuery+'\n}';
                } else {
                    wrappedCss += ruleMatch[1].substring(ruleMatch[2].length) + '\n';
                }
            } else {
                console.w('wrapCss was unable to parse rule.', ruleParts, ruleMatch);
            }
        }
    } while (ruleMatch);
    if (wrappedCss !== '') {
        css = wrappedCss;
    }
    return css;
}

module.exports = function(options, template, data, cb) {
    const html = parseHtml(options.source, data);
    cb(null, html);
};
