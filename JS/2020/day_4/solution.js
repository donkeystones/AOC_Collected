
let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');
let data_arr = data.split("\r\n\r\n");
let valid_fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let sum_part1 = 0, sum_part2 = 0;

const validate_part_1 = (passport) => {
	return valid_fields.every(item => passport.includes(item));
}

const validate_part_2 = (passport) => {
	for(let i = 0; i < passport.length; i++){
		let pass_field = passport[i];
		let temp = pass_field.split(":");
		if(temp.length > 1){
			switch(temp[0]){
				case "byr":
					let year = parseInt(temp[1])
					if(year > 2002 || year < 1920){
						return false;
					}
					break;
				case "iyr":
					let year2 = parseInt(temp[1])
					if(year2 > 2020 || year2 < 2010){
						return false;
					}
					break;
				case "eyr":
					let year3 = parseInt(temp[1])
					if(year3 > 2030 || year3 < 2020){
						return false;
					}
					break;
				case "hgt":
					if(temp[1].includes("cm")){
						let cm = parseInt(temp[1].replace(/^\D+/g, ''));
						if(cm > 193 || cm < 150) {
							return false;
						}
					}else{
						let inches = parseInt(temp[1].replace(/^\D+/g, ''));
						if(inches > 76 || inches < 59) {
							return false;
						}
					}
					break;

				case "hcl":
					if(!temp[1].match(/^#[0-9a-f]{6}$/)){
						return false;
					}
					break;
				case "ecl":
					let valid_eye_color = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
					if(!valid_eye_color.includes(temp[1])) {
						return false;
					}
					break;
				case "pid":
					if(!temp[1].match(/^\d{9}$/)) {
						return false;
					}
					break;
			}
		}

	}
	return true;
}

for(let i = 0; i < data_arr.length; i++){
	if(validate_part_1(data_arr[i])) {
		sum_part1++;
		let pass_data = data_arr[i].split(/[\n\s]/);//Part 2?
		if(validate_part_2(pass_data))
			sum_part2++;
	}
}

console.log(sum_part1);
console.log(sum_part2);