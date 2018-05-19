const term = require('terminal-kit').terminal;
const util = require('util');

term.reset().clear();

function update(s, ...args) {
    term.restoreCursor(util.format(s, ...args)).eraseLineAfter('\n');
    return this;
}

function info(s, ...args) {
    if (s == null) s = '';
    t().bgBlue().black('I')
        .bgDefaultColor().defaultColor(' ').saveCursor(util.format(s, ...args)+'\n');
    return this;
}

function warn(s, ...args) {
    if (s == null) s = '';
    t().bgYellow().black('W').saveCursor()
        .bgDefaultColor().defaultColor(' ').saveCursor(util.format(s, ...args)+'\n');
    return this;
}

function error(s, ...args) {
    if (s == null) s = '';
    t().bgRed().white('E').saveCursor()
        .bgDefaultColor().defaultColor(' ').saveCursor(util.format(s, ...args)+'\n');
    return this;
}

function t() {
    return term.bgDefaultColor().defaultColor(timestamp()+' ');
}

function timestamp() {
    const d = new Date();
    const ms = d.getTime() - d.getTimezoneOffset() * 60000;
    return new Date(ms).toISOString().slice(11, -1);
}

const busyCursorAnim = ['|', '/', '-', '\\', '/', '-'];
let busyCursorFrame = 0;
function busyCursor() {
    if (busyCursorFrame > busyCursorAnim.length-1) {
        busyCursorFrame = 0;
    }
    return busyCursorAnim[busyCursorFrame++];
}

module.exports = {
    info: info,
    error: error,
    warn: warn,
    update: update,
    log: function(s, ...args) {
        s = util.format(s, ...args);
        if (s == null) {
            s = '';
        }
//        console.log(s);
        term.saveCursor();
    },
    busyCursor: busyCursor,
    timestamp: timestamp,
    term: term
};
