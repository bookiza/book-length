module.exports.length = (manuscriptPath) => {
    
	const fs = require('fs')
	const path = require('path')

	if (manuscriptPath === undefined) { manuscriptPath = path.join('.', 'manuscript','page-*') }
	
	return fs.readdir(manuscriptPath, (err, pages) => pages.length

}






