const { exit, stderr } = require('process');

exports.validation = (action, shift)=>{
	if(action !== 'encode') {
		if(action !== 'decode'){
			process.stderr.write('error: option -a must have meaning "encode" or "decode"');
			exit();	
		}		
	}
	if(isNaN(parseInt(shift))) {
		process.stderr.write('error: enter number for option -s');
		exit();	
	}
	if(parseInt(shift)<0){
		process.stderr.write('error: option -s must have a positive number');
		exit();
	}

}