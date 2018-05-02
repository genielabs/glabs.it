const staticSite = require('static-site');
const util = require('util');
const config = require('config');
const zuixConfig = config.get('zuix');
const tlog = require('../lib/logger');

tlog.info('Reading configuration');

const sourceFolder = zuixConfig.get('build.input');
const buildFolder = zuixConfig.get('build.output');
// copy them directly to output folder, do not process them with the builder
const ignoreList = zuixConfig.get('build.copy');

tlog.info('Copying base files from "%s" to "%s"', sourceFolder, buildFolder)
    .info();
// Copy things in ignore list straight to the build folder
for (let i = 0; i < ignoreList.length; i++) {
    const path = ignoreList[i];
    const source = util.format('%s/%s', sourceFolder, path);
    const destination = util.format('%s/%s', buildFolder, path);
    tlog.update('   | "%s" -> "%s"', source, destination);
    copyFolder(source, destination);
}
// disable Jekyll for github pages publishing
copyFolder(util.format('%s/.nojekyll', sourceFolder), util.format('%s/.nojekyll', buildFolder));
// Copy zuix-dist files
tlog.update('   | "%s" -> "%s"', 'zuix-dist', 'js');
copyFolder(util.format('%s/node_modules/zuix-dist/js', process.cwd()), util.format('%s/js/zuix', buildFolder));
tlog.update('Generating files:');
// TODO: should put green checkmark on succesfully completed step

// Parse and compile to static all other files
staticSite({
    build: buildFolder,
    source: sourceFolder,
    ignore: ignoreList,
    files: zuixConfig.get('build.compile'),
    helpers: ['zuix/helpers/subfolder_root.js'],
    templateEngine: 'zuix/engines/zuix-bundler.js'
}, function(err, stats) {
    tlog.info().info('Generated files: %s.', stats.pages.length);
    if (err != null) {
        tlog.info().error(err);
    }
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
