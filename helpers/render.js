/*
const jade = require('jade')

function (options, content, data, cb) {
    const fn = jade.compile(content, {})
    const html = fn(data)
    cb(null, html)
}
*/
const fs = require('fs');

const Promise = require('es6-promise').Promise;
const swig = require('swig-templates');
const path = require('path');
const isMarkdown = require('../node_modules/static-site/lib/utils/is-markdown');
const markdownTag = require('../node_modules/static-site/lib/utils/markdown-tag');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const extras = require('swig-extras');
const util = require("util");

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
    let html = swigTemplate(data);
    html = replaceBraces(html._result.contents, function(value) {
        if (value.startsWith('[include ')) {
            // TODO: load html + css
            const parts = value.split(' ');
            const file = parts[1]
                .substring(0, parts[1].length-1)
                .trim()
                .replace(/["']([^"']+(?=["']))["']/g, '$1');
            const html = fs.readFileSync(sourceFolder+'/'+file+'.html');
            let css = fs.readFileSync(sourceFolder+'/'+file+'.css').toString();
            return util.format('\n<style>\n%s\n</style>\n%s\n', wrapCss('[data-ui-component="' + file + '"]:not(.zuix-css-ignore)', css), html);
        }
    });
    return html != null ? html : data.content;
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
