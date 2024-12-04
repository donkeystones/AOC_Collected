let fs = require("fs");
var data = fs.readFileSync('./input.txt','utf8');

let data_arr = data.split(/\r\n|\r/);

let data_2D_arr = [];

for(let row of data_arr){
    data_2D_arr.push(row.split(""));
}

let width = data_2D_arr[0].length;
let height = data_2D_arr.length;

let sum1 = 0;

//Part 1
for(let y = 0; y < data_2D_arr.length; y++){
    for(let x = 0; x < data_2D_arr[y].length; x++){
        //Horizontal - left to right
        if(x < width - 3){
            let word = data_2D_arr[y][x] + data_2D_arr[y][x+1] + data_2D_arr[y][x+2] + data_2D_arr[y][x+3]
            
            if(word === "XMAS") sum1++; 
        }

        //Horizontal - right to left
        if(x > 2){
            let word = data_2D_arr[y][x] + data_2D_arr[y][x-1] + data_2D_arr[y][x-2] + data_2D_arr[y][x-3]

            if(word === "XMAS") sum1++;
        }

        //Vertical - Up to down
        if(y < height - 3){
            let word = data_2D_arr[y][x] + data_2D_arr[y+1][x] + data_2D_arr[y+2][x] + data_2D_arr[y+3][x]
            
            if(word === "XMAS") sum1++;
        }

        //Vertical - Down to up
        if(y > 2){
            let word = data_2D_arr[y][x] + data_2D_arr[y-1][x] + data_2D_arr[y-2][x] + data_2D_arr[y-3][x]
            
            if(word === "XMAS") sum1++;
        }

        //Diagonal - left up to right down
        if(x < width - 3 && y < height - 3){
            let word = data_2D_arr[y][x] + data_2D_arr[y+1][x+1] + data_2D_arr[y+2][x+2] + data_2D_arr[y+3][x+3]

            if(word === "XMAS") sum1++;
        }

        //Diagonal - right down to left up
        if(x > 2 && y > 2){
            let word = data_2D_arr[y][x] + data_2D_arr[y-1][x-1] + data_2D_arr[y-2][x-2] + data_2D_arr[y-3][x-3]

            if(word === "XMAS") sum1++;
        }

        //Diagonal - left down right up
        if(x < width - 3 && y > 2){
            let word = data_2D_arr[y][x] + data_2D_arr[y-1][x+1] + data_2D_arr[y-2][x+2] + data_2D_arr[y-3][x+3]

            if(word === "XMAS") sum1++;
        }

        //Diagonal - Right up left down
        if(x > 2 && y < height - 3){
            let word = data_2D_arr[y][x] + data_2D_arr[y+1][x-1] + data_2D_arr[y+2][x-2] + data_2D_arr[y+3][x-3]

            if(word === "XMAS") sum1++;
        }
    }
}

console.log(sum1);