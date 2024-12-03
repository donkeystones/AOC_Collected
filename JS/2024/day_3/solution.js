let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');

//part 1

let regex = /mul\((\d+),(\d+)\)/gm; // Captures mul(1,1)

let filtered_data = (data.match(regex) || []);

let sum = 0;

function handle_mul(mul){
    mul = mul.replace("mul(" , "");
    mul = mul.replace(")");
    let numbers_to_multiply = mul.split(",");
    return parseInt(numbers_to_multiply[0]) * parseInt(numbers_to_multiply[1])
}

for(let mul of filtered_data){
    sum += handle_mul(mul);
}


//part 2

let regex2 = /(?:mul\((\d+),(\d+)\)|do\(\)|don't\(\))/gm;

let filtered_data_2 = (data.match(regex2) || []);

let sum2 = 0;
let enabled = true;

for(let command of filtered_data_2){
    console.log("running: " + command);
    if(command === "do()") enabled = true;
    else if (command === "don't()") enabled = false;


    if(enabled && command !== "do()" && command !== "don't()"){
        console.log("adding to sum!");
        sum2 += handle_mul(command);
    }
}

console.log(sum);
console.log(sum2);