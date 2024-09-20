let fs = require('fs')

var data = fs.readFileSync('./input.txt','utf8');
//Part 1 & 2
let highest = 0;
let top_three = [0,0,0];
data.split("\n").map((d) => {
	if(d !== ""){
		let digit = parseInt(d);
		if(highest < digit){//Part 1
			highest = digit; 
		}
		for(let i = 0; i < top_three.length; i++){
			if(top_three[i] < digit) {
				for(let j = top_three.length-1; j>i; j--){
					top_three[j] = top_three[j-1];
				}
				top_three[i] = digit;
				break;
			}
		}
	}
});
console.log("highest: " + highest);
console.log("top three arr: " + top_three);
console.log("top three sum: " + top_three.reduce((p, a) => p + a,0));
