let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');


let regex = /mul\((\d+),(\d+)\)/gm; // Captures mul(1,1)

let filtered_data = ((data.match(regex) || []));

let sum = 0;

for(let mul of filtered_data){
    mul = mul.replace("mul(" , "");
    mul = mul.replace(")");
    console.log(mul);
    let numbers_to_multiply = mul.split(",");
    sum += parseInt(numbers_to_multiply[0]) * parseInt(numbers_to_multiply[1])
}

console.log(sum);