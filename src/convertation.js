exports.encode = (key) =>{
	return function(chunk, enc, callback){
		const text = chunk.toString('utf8');
		let charArr = [...text];
		let fKey = key;
		if(key >26) fKey = key%26;
		for(i=0; i<charArr.length; i++){
			charArr[i] = charArr[i].charCodeAt();
			if(charArr[i] >= 65 && charArr[i]<=90){
				charArr[i] += fKey;
			if(charArr[i] > 90) charArr[i] = 64 + (charArr[i] - 90);
			}
			if(charArr[i] >= 97 && charArr[i] <= 122){
				charArr[i] += fKey;
			if(charArr[i] > 122) charArr[i] = 96 + (charArr[i] - 122); 
			}
		}
	this.push(charArr.map((el)=>String.fromCharCode(el)).join(''));
	callback();
	}
}

exports.decode = (key) =>{
	return function(chunk, enc, callback){
		let fKey = key;
		const text = chunk.toString('utf8');
		const charArr = [...text];
		if(key >26) fKey = key%26;
		for(i=0; i<charArr.length; i++){
			charArr[i] = charArr[i].charCodeAt();
			if(charArr[i] >= 65 && charArr[i]<=90){
				charArr[i] -= fKey;
			if(charArr[i] < 65) charArr[i] = 91 - (65 - charArr[i]);
			}
			if(charArr[i] >= 97 && charArr[i] <= 122){
				charArr[i] -= fKey;
			if(charArr[i] < 97) charArr[i] = 123 - (97 - charArr[i]); 
			}
		}
	this.push(charArr.map((el)=>String.fromCharCode(el)).join(''));
	callback();
	}
}
