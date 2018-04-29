const staticSite = require('static-site');
const util = require('util');
const sourceFolder = process.argv[2] != null ? process.argv[2] : './source';
const buildFolder = process.argv[3] != null ? process.argv[3] : './build';

let ignoreList = ['_app', 'apps', '_inc', 'css', 'images', 'js'];
console.log(new Date().toLocaleTimeString(), 'Building started...');

// Copy things in ignore list straight to the build folder
ignoreList.forEach(function(value) {
    const source = sourceFolder+'/'+value;
    const destination = buildFolder+'/'+value;
    console.info(util.format('Copying %s to %s', source, destination));
    copyFolder(source, destination);
});

// Copy zuix-dist files
copyFolder(process.cwd()+'/node_modules/zuix-dist/js', buildFolder+'/js/zuix');

// Parse and compile to static all other files
staticSite({
    build: buildFolder,
    source: sourceFolder,
    ignore: ignoreList,
    files: ['html', 'css', 'js', 'md', 'svg'],
    helpers: ['zuix/helpers/subfolder_root.js'],
    templateEngine: 'zuix/engines/zuix-static.js'
}, function(err, stats) {
    // stats -> {pages: [...], source: '', build: '', start: 1434175863750, end: 1434175863770, duration: 20}
    console.log(err, stats);
});

// TODO: should wait async
// console.log(new Date().toLocaleTimeString(), '... building complete.');

function copyFolder(source, dest) {
    // console.log('Copying "'+source+'" to "'+dest+'" ...');
    const path = require('path');
    const ncp = require('ncp').ncp;
    // ncp.limit = 16;
    // ncp.stopOnErr = true;
    ncp(path.resolve(process.cwd(), source), path.resolve(process.cwd(), dest), function(err) {
        if (err) {
            return console.error(err);
        }
        // console.log('... done!');
    });
}
