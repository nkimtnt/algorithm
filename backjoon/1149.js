/**
 * RGB거리
 * https://www.acmicpc.net/problem/1149
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [tempNum, tempNumArr] = fs.readFileSync(stdin).toString().trim().split('\n');

const num = +tempNum;
const numArr = tempNumArr.split(' ').map(num => +num);


console.log('---answer---', num);
console.log('---answer---', numArr);