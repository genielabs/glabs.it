const staticSite = require('static-site');
const util = require('util');
const logger = require('npmlog');
require('draftlog').into(console);

const sourceFolder = process.argv[2] != null ? process.argv[2] : './source';
const buildFolder = process.argv[3] != null ? process.argv[3] : './build';
let ignoreList = ['app', 'apps', '_inc', 'css', 'images', 'js'];

logger.info(new Date().toLocaleTimeString(), 'Building site...');
logger.info('- Copying base files');

// Copy things in ignore list straight to the build folder
const statusLine = console.draft('-');
const barLine = console.draft('-');
for (let i = 0; i < ignoreList.length; i++) {
    const path = ignoreList[i];
    const source = util.format('%s/%s', sourceFolder, path);
    const destination = util.format('%s/%s', buildFolder, path);
    statusLine(source, '>', destination);
    barLine(progressBar(i/ignoreList.length*100));
    copyFolder(source, destination);
}
// Copy zuix-dist files
copyFolder(util.format('%s/node_modules/zuix-dist/js', process.cwd()), util.format('%s/js/zuix', buildFolder));
statusLine('zuix-dist folder to js folder');
barLine(progressBar(100));

// Parse and compile to static all other files
staticSite({
    build: buildFolder,
    source: sourceFolder,
    ignore: ignoreList,
    files: ['html', 'css', 'js', 'md', 'svg'],
    helpers: ['zuix/helpers/subfolder_root.js'],
    templateEngine: 'zuix/engines/zuix-bundler.js'
}, function(err, stats) {
    // stats -> {pages: [...], source: '', build: '', start: 1434175863750, end: 1434175863770, duration: 20}
    logger.error(err, stats);
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

