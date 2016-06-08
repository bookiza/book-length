function length() {
    const shell = require('shelljs');
    const path = require('path');

    return shell.exec( ls('-d', path.join('manuscript', 'page-*')).length );
}

module.exports.length = length;
