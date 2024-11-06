let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');

const binary_space_partition = (boarding_pass_data, upper_char, lower_char, upper_value) => {
    let lo = 0, hi = upper_value;
    for(let char of boarding_pass_data){
        const mid = Math.floor((lo + hi) / 2);
        if(char === lower_char){
            hi = mid;
        }else if(char === upper_char){
            lo = mid;
        }
    }
    return lo;
}

const parse_seat_id = (boarding_pass) => {
        const rowInfo = boarding_pass.slice(0, 7);
        const colInfo = boarding_pass.slice(7);
        const row = binary_space_partition(rowInfo, 'B', 'F', 128);
        const col = binary_space_partition(colInfo, 'R', 'L', 8);
        return (row * 8) + col;
}

const part1 = () => {
    let highest_seat_ID = 0;
    
    for(let boarding_pass of data.split("\r\n")){
        const current_seat_id = parse_seat_id(boarding_pass);
        if(current_seat_id > highest_seat_ID) highest_seat_ID = current_seat_id;
    }
    return highest_seat_ID;
}

const part2 = () => {
    const ids = data.split("\r\n").map(parse_seat_id);
    const sortedIds = ids.sort((a,b) => a-b)
    for(let i = 1; i < sortedIds.length -1; i++){
        const prev = sortedIds[i-1];
        const curr = sortedIds[i];

        if(prev+1 !== curr){
            return prev +1;
        }
    }
}
console.log(part1());
console.log(part2());