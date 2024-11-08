let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');

//essentially you are going to find unique characters in each group, each unique char in a group is 1 point
/*
    e.g: 
    abc group 1
    abc
    abc

    a group 2
    a
    a
spaces indicate group change!
    c group 3
    c
    c

*/

const parse_group_question_amount = (group) => {
    return new Set([...group.replace(/\s/g,'')].join('')).size;
}

const part1 = () => {
    let sum = 0;
    for(let group of data.split(/\r\n\r\n|\n\n/))
        sum += parse_group_question_amount(group);
    return sum;
}

console.log(part1());