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
const request = require('sync-request');
const stringify = require('json-stringify');
// logging
const logger = require('npmlog');
// zuix-bundler cli
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const LIBRARY_PATH_DEFAULT = '//genielabs.github.io/zkit/lib';

const zuixBundle = {
    viewList: [],
    styleList: [],
    controllerList: []
};

function createBundle(sourceFolder, data) {
    if (data.file.endsWith('.html')) {
        const dom = new JSDOM(data.content, {runScripts: 'dangerously'});
        const nodeList = dom.window.document.querySelectorAll('[data-ui-include],[data-ui-load]');
        if (nodeList != null) {
            nodeList.forEach(function(el) {
                let hasJsFile = false;
                let path = el.getAttribute('data-ui-include');
                if (path == null || path === '') {
                    path = el.getAttribute('data-ui-load');
                    hasJsFile = true;
                }
                if (path.startsWith('@lib/')) {
                    path = LIBRARY_PATH_DEFAULT+path.substring(4);
                }
                let content;
                if (hasJsFile) {
                    if (isBundled(zuixBundle.controllerList, path)) {
                        return;
                    }
                    content = fetchResource('js', path, sourceFolder);
                    if (content != null) {
                        zuixBundle.controllerList.push({path: path, content: content});
                    }
                }
                // HTML
                if (isBundled(zuixBundle.viewList, path)) {
                    return;
                }
                content = fetchResource('html', path, sourceFolder);
                if (content != null) {
                    if (el.getAttribute('data-ui-mode') === 'unwrap') {
                        // TODO: add HTML comment with file info
                        el.outerHTML = content;
                    } else {
                        createBundle(sourceFolder, {
                            file: sourceFolder + '/app/' + path + '.html',
                            content: content
                        });
                        zuixBundle.viewList.push({path: path, content: content});
                    }
                }
                // CSS
                content = fetchResource('css', path, sourceFolder);
                if (content != null) {
                    if (el.getAttribute('data-ui-mode') === 'unwrap') {
                        // TODO: add // comment with file info
                        content = util.format('\n<style id="%s">\n%s\n</style>\n', path, content);
                        dom.window.document.querySelector('head').innerHTML += util.format('\n<!--{[%s]}-->\n%s', path, content);
                    } else {
                        zuixBundle.styleList.push({path: path, content: content});
                    }
                }
            });
        }
        return dom;
    }
}

function isBundled(list, path) {
    const AlreadyExistsException = {};
    try {
        list.forEach(function(b) {
            if (b.path === path) {
                throw AlreadyExistsException;
            }
        });
    } catch (e) {
        if (e === AlreadyExistsException) {
            return true;
        }
    }
    return false;
}

function fetchResource(type, path, sourceFolder) {
    let content = null;
    path = path + '.' + type;
    if (path.indexOf('://') > 0 || path.startsWith('//')) {
        if (path.startsWith('//')) {
            path = 'https:'+path;
        }
        logger.info(timestamp(), util.format('Downloading resource "%s"...', path));
        const res = request('GET', path);
        if (res.statusCode === 200) {
            content = res.getBody('utf8');
        } else {
            logger.error(timestamp(), res.statusCode, path);
        }
    } else {
        const f = sourceFolder + '/app/' + path;
        try {
            content = fs.readFileSync(f).toString();
        } catch (e) {
            logger.error(timestamp(), e.code, f);
        }
    }
    return content;
}

function getBundleItem(bundle, path) {
    let item = null;
    const AlreadyExistsException = {};
    try {
        bundle.forEach(function(b) {
            if (b.componentId === path) {
                item = b;
                throw AlreadyExistsException;
            }
        });
    } catch (e) {
        if (e === AlreadyExistsException) {
            return item;
        }
    }
    item = {
        componentId: path
    };
    bundle.push(item);
    return item;
}

function generateApp(sourceFolder, data) {
    const dom = createBundle(sourceFolder, data);
    if (dom != null) {
        let inlineViews = '<!-- zUIx inline resource resourceBundle -->';
        zuixBundle.viewList.forEach(function(v) {
            logger.info(timestamp(), 'Adding view', v.path);
            const content = util.format('<div data-ui-view="%s">\n%s\n</div>', v.path, v.content);
            inlineViews += util.format('\n<!--{[%s]}-->\n%s', v.path, content);
        });
        let resourceBundle = [];
        zuixBundle.controllerList.forEach(function(s) {
            // TODO: ensure it ends with ;
            logger.info(timestamp(), 'Adding controller', s.path);
            // inlineViews += s.content;
            getBundleItem(resourceBundle, s.path).controller = s.content;
        });
        zuixBundle.styleList.forEach(function(s) {
            logger.info(timestamp(), 'Adding style', s.path);
            getBundleItem(resourceBundle, s.path).css = s.content;
        });
        const json = stringify(resourceBundle, null, 2);
        let jsonBundle = '<script>zuix.bundle('+json+')</script>';

        dom.window.document.body.innerHTML += util.format('<div style="display:none">%s</div>', inlineViews);
        dom.window.document.body.innerHTML += jsonBundle;

        data.content = dom.serialize();
    }
}

function timestamp() {
    const d = new Date();
    const ms = d.getTime() - d.getTimezoneOffset() * 60000;
    return new Date(ms).toISOString().slice(11, -1);
}

module.exports = function(options, template, data, cb) {
    // zUIx bundle
    generateApp(options.source, data);
    // Default static-site processing
    cb(null, swigTemplate(data)._result.contents);
};


/* BEGIN 'static-site' default engine code */

const Promise = require('es6-promise').Promise;
const swig = require('swig-templates');
const isMarkdown = require('../../node_modules/static-site/lib/utils/is-markdown');
const markdownTag = require('../../node_modules/static-site/lib/utils/markdown-tag');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const extras = require('swig-extras');

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

/* END 'static-site' default engine code */
