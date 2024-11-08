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

const parse_group_question_amount = (groups) => {
    return new Set([...groups.replace(/\s/g,'')].join('')).size;
}

const parse_group_question_amount_revised = (groups) => {
    let group_arr = groups.split(/\r\n|\n/);
    group_arr.sort((a,b) => a.length - b.length);
    let smallest_group_answers = group_arr[0].split("");
    for(let i = 1; i < group_arr.length; i++){
        smallest_group_answers = smallest_group_answers.filter(
            value => group_arr[i].split("").includes(value)
        )
    }
    return smallest_group_answers.length;
}

const part1 = () => {
    let sum = 0;
    for(let group of data.split(/\r\n\r\n|\n\n/))
        sum += parse_group_question_amount(group);
    return sum;
}

const part2 = () => {
    let sum = 0;
    for(let group of data.split(/\r\n\r\n|\n\n/))
        sum += parse_group_question_amount_revised(group);
    return sum;
}

console.log(part1());
console.log(part2());