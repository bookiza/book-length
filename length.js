module.exports.length = () => {
    require('shelljs/global')
    
    const path = require('path')

    return ls('-d', path.join('manuscript','page-*')).length
}


