let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');

let level_data = data.split(/\r\n|\n/);

let sum_1 = 0;

for(let level of level_data){
    let valid = true;
    let level_arr = level.split(" ");
    let increase = parseInt(level_arr[0]) < parseInt(level_arr[1]);
    
    for(let i = 0; i < level_arr.length-1; i++){
        let a = parseInt(level_arr[i]), b = parseInt(level_arr[i+1]);
        
        if(increase && a > b) valid = false;
        if(!increase && a < b) valid = false;
        let diff = a - b;
        if(diff < 0) diff*=-1;
        if(diff > 3 || diff === 0) valid = false;
    }
    if(valid)
        sum_1++;
}

console.log(sum_1);