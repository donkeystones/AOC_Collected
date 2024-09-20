let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');
let data_arr = data.split("\n");

const findTrees = (xinc, yinc, data_ar) => {
	let x = 0, y = yinc, sum = 0;
	for(;y < data_ar.length; y+= yinc){
		x += xinc;
		if(x >= data_ar[y].length) x -= data_ar[y].length;
		if(data_ar[y][x] === "#") sum++;
	}
	return sum;
} 

console.log(findTrees(3,1,data_arr));

let slopesX = [1,3,5,7,1];
let slopesY = [1,1,1,1,2];
let treesP2 = 1;

for(let i = 0; i < slopesX.length; i++){
	treesP2 *= findTrees(slopesX[i], slopesY[i], data_arr);
}
console.log(treesP2);
