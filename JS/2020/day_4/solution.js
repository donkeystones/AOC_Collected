let fs = require("fs");

const fields_are_valid = (passport) => {
console.log(passport.split(/\r\n+/g))
}

var data = fs.readFileSync('./input.txt','utf8');

console.log(data);

let data_arr = data.split(/[\r\n]+/); //TODO: Fix so that it splits proper
console.log(data_arr[0]);

let valid_fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let sum_part1 = 0;
let sum_part2 = 0;
for(let i = 0; i < data_arr.length; i++){
	if(valid_fields.every(item => data_arr[i].includes(item))) { //Part 1 check for every field that should be present
		sum_part1++;
		console.log(data_arr[i])
		if(fields_are_valid(data_arr[i])){

		}
	}
}

console.log(sum_part2);
console.log(sum_part1);
