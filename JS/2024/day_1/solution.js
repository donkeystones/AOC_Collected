let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');


let data_arr = data.split(/\r\n|\n/);

let left_arr = [];
let right_arr = [];

for(let row of data_arr){
    let row_clean = row.replace(/\s+/," ").split(" ");
    left_arr.push(parseInt(row_clean[0]))
    right_arr.push(parseInt(row_clean[1]))
}

left_arr.sort();
right_arr.sort();

let sum = 0;

for(let i = 0; i < left_arr.length; i++){
    sum += right_arr[i] - left_arr[i]
}

console.log(sum);