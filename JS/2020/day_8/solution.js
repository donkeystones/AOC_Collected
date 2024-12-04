let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');

let instructions = data.split(/\r\n|\n/)

let acc = 0;
let history = [];

for(let current_instruction_idx = 0; current_instruction_idx < instructions.length; ){
    let current_instruction = instructions[current_instruction_idx].split(" ");
    
    if(history.length > 0 && history.findIndex((element) =>  element === current_instruction_idx) !== -1) break;
    history.push(current_instruction_idx);

    if(current_instruction[0] === "acc") {
        acc += parseInt(current_instruction[1]); 
        current_instruction_idx++;
    }
    
    else if(current_instruction[0] === "nop") current_instruction_idx++;

    else if(current_instruction[0] === "jmp") current_instruction_idx += parseInt(current_instruction[1]);

    
}

console.log(acc);