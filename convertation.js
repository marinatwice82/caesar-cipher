exports.encode = (key) =>{
	return function(chunk, enc, callback){
		const text = chunk.toString('utf8');
		console.log("text ", chunk);
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
		/*
		const codeArr = charArr.map((el)=>{
		let codeElement = el.charCodeAt();
		if(codeElement >= 65 && codeElement<=90){
			codeElement -= fKey;
			if(codeElement < 65) codeElement = 91 - (65 - codeElement);
		}
		if(codeElement >= 97 && codeElement <= 122){
			codeElement -= fKey;
			if(codeElement < 97) codeElement = 123 - (97 - codeElement); 
		}
		
		return codeElement;
	});
	*/
	this.push(charArr.map((el)=>String.fromCharCode(el)).join(''));
	callback();
	}
}
