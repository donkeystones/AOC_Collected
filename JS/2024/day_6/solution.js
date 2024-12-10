let fs = require("fs");
var data = fs.readFileSync('./example.txt','utf8');

let distinct_positions = [];

let dir = "N";

let data_arr = data.split(/\r\n|\n/);
let data_2d_arr = [];

for(let row of data_arr){
    data_2d_arr.push(row.split(""));
}

function convert_pos_to_string(y,x){
    return `${y},${x}`;
}


let width = data_2d_arr[0].length;
let height = data_2d_arr.length;

let guard = {x: -1, y: -1}

for(let y = 0; y < data_2d_arr.length; y++){
    for(let x = 0; x < data_2d_arr[y].length; x++){
        if(data_2d_arr[y][x] === "^") {
            guard.x = x;
            guard.y = y;
            break;
        }
    }
}

let out_of_bounds = false;

while(!out_of_bounds){
    //Check if next is out of bounds
    if(guard.x >= width || guard.x < 0 || guard.y >= height || guard.y < 0){
        out_of_bounds = true;
        break;
    }

    if(dir === "N"){
        if(data_2d_arr[guard.y-1][guard.x] === "#"){
            dir = "E"
        }else {
            guard.y -= 1;
        }
    }
    if(dir === "E"){
        if(data_2d_arr[guard.y][guard.x+1] === "#"){
            dir = "S"
        }else {
            guard.x += 1;
        }
    }
    
    if(dir === "S"){
        if(data_2d_arr[guard.y+1][guard.x] === "#"){
            dir = "W"
        }else {
            guard.y += 1;
        }
    }
    
    if(dir === "W"){
        if(data_2d_arr[guard.y][guard.x-1] === "#"){
            dir = "N"
        }else {
            guard.x += 1;
        }
    }

    console.log("Guard: x " + guard.x + ", y " + guard.y)
    if(distinct_positions.findIndex(pos => pos === convert_pos_to_string(guard.y,guard.x)) === -1){
        distinct_positions.push(convert_pos_to_string(guard.y,guard.x))
    }
}

console.log(distinct_positions.length);