module.exports.length = (manuscriptPath) => {
    
	const fs = require('fs')
	const path = require('path')

	if (manuscriptPath === undefined) { manuscriptPath = path.join('.', 'manuscript') }
	
	let bookLength = 0 
	
	fs.readdir(manuscriptPath, (err, files) => { bookLength = files.length })

	return bookLength
}
