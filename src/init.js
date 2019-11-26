let fs = require('fs');
let configuration;
init()
function init() {
	let configurationFile = './config.json';
	configuration = JSON.parse(
	    fs.readFileSync(configurationFile)
	);
}

module.exports = {
  	configuration
}