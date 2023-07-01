const fs = require('fs');
const input = Number(fs.readFileSync('../example.txt').toString().trim());

let block = 1;
let range = 1;

while (block < input) {
    block += 6 * range;

    range++;
}

console.log(range);
