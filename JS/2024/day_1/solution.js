let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');

//Part 1
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
    let calc_diff = right_arr[i] - left_arr[i]
    if(calc_diff < 0) calc_diff *= -1;

    sum += calc_diff;
}
let sum_2 = 0;
//part 2
for(let i = 0; i < left_arr.length; i++){
    sum_2 += left_arr[i] * right_arr.filter(x => x=== left_arr[i]).length;
}

console.log(sum);
console.log(sum_2);