let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');


const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//Fetch common item from compartments
const fcifc = (rucksack) => {
	let middle = Math.ceil(rucksack.length / 2);

	let first = rucksack.slice(0,middle)
	let second = rucksack.slice(middle)

	return first.filter(item => second.includes(item));
}

const get_priority = (char) => {
	return priority.indexOf(char) + 1;
}

let total_sum_part_1 = 0;
data.split("\n").map(rs => {
	if(rs !== "")
		total_sum_part_1 += get_priority(fcifc(rs.split(""))[0]);
});

console.log(total_sum_part_1);

//Part 2
const get_badge_sums_from_groups = (groups) => {
	let total = 0;
	console.log(groups.length);
	for(let i = 0; i < groups.length; i+=3){
		if(groups[i] !== ""){
			let group1 = groups[i].split("");
			let group2 = groups[i+1].split("");
			let group3 = groups[i+2].split("");
			let badge = "";
			group1.forEach((item) => {
				if((group2.indexOf(item) > -1) && (group3.indexOf(item) > -1)) badge += item;
			});
			total += get_priority(badge);
		}
	}
	return total;
}

let total_sum_part_2 = get_badge_sums_from_groups(data.split("\n"));
console.log(total_sum_part_2);
