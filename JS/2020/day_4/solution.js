let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

let data_arr = data.split("\n\n");
let valid_fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let sum = 0;
for(let i = 0; i < data_arr.length; i++){
	let pass_data = data_arr[i].split(/[\n\s]/);//Part 2?
	if(valid_fields.every(item => data_arr[i].includes(item))) {
		sum++;
	}
}

console.log(sum);
