const staticSite = require('static-site');
const util = require('util');
const logger = require('npmlog');
require('draftlog').into(console);

const sourceFolder = process.argv[2] != null ? process.argv[2] : './source';
const buildFolder = process.argv[3] != null ? process.argv[3] : './build';
let ignoreList = ['app', 'apps', '_inc', 'css', 'images', 'js'];

logger.info(timestamp(), 'Building site...');
logger.info(timestamp(), '- Copying base files');

// Copy things in ignore list straight to the build folder
const statusLine = console.draft('-');
const barLine = console.draft('-');
for (let i = 0; i < ignoreList.length; i++) {
    const path = ignoreList[i];
    const source = util.format('%s/%s', sourceFolder, path);
    const destination = util.format('%s/%s', buildFolder, path);
    statusLine('                   ' + source, '>', destination);
    barLine('                   ' + progressBar(i/ignoreList.length*100));
    copyFolder(source, destination);
}
// Copy zuix-dist files
statusLine('zuix-dist folder to js folder');
barLine('                   ' + progressBar(100));
copyFolder(util.format('%s/node_modules/zuix-dist/js', process.cwd()), util.format('%s/js/zuix', buildFolder));
statusLine('');
barLine('');
console.log('\u001b[3A'); // go up 3 lines
logger.info(timestamp(), '- Generating files');

// Parse and compile to static all other files
staticSite({
    build: buildFolder,
    source: sourceFolder,
    ignore: ignoreList,
    files: ['html', 'css', 'js', 'md', 'svg'],
    helpers: ['zuix/helpers/subfolder_root.js'],
    templateEngine: 'zuix/engines/zuix-bundler.js'
}, function(err, stats) {
    logger.info(timestamp(), 'Generated files:');
    stats.pages.forEach(function(path) {
        logger.info(timestamp(), path);
    });
    if (err != null) {
        logger.error(timestamp(), err);
    }
    logger.info(timestamp(), 'Done.');
});

// TODO: should wait async
// console.log(new Date().toLocaleTimeString(), '... building complete.');

function copyFolder(source, destination, done) {
    const path = require('path');
    const ncp = require('ncp').ncp;
    // ncp.limit = 16;
    // ncp.stopOnErr = true;
    ncp(path.resolve(process.cwd(), source), path.resolve(process.cwd(), destination), function(err) {
        if (typeof done === 'function') {
            done(err);
        }
    });
}

// Input progess goes from 0 to 100
function progressBar(progress) {
    // Make it 50 characters length
    var units = Math.round(progress / 2)
    return '[' + '='.repeat(units) + ' '.repeat(50 - units) + '] ' + progress + '%'
}

function timestamp() {
    const d = new Date();
    const ms = d.getTime() - d.getTimezoneOffset() * 60000;
    return new Date(ms).toISOString().slice(11, -1);
}
