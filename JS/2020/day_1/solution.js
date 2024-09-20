let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

let data_arr = data.split("\n").map((item) => {return parseInt(item)});
let part1 = 0;
let part2 = 0;
//-1 to skip the NaN at the end
for(let i = 0; i < data_arr.length-1; i++) {
	let sum1 = 2020;
	sum1 -= data_arr[i];

	for(let j = i+1; j < data_arr.length-1; j++){
		if(sum1 === data_arr[j] && part1 === 0)
			part1 = data_arr[j] * data_arr[i];
		for(let k = j+1;k < data_arr.length-1; k++){
			if(data_arr[i]+data_arr[j]+data_arr[k] === 2020){
				part2 = data_arr[i]*data_arr[j]*data_arr[k]
			}
		}
	}
}

console.log(part1)
console.log(part2);
