/**
 * 1로 만들기
 * https://www.acmicpc.net/problem/1463
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const num = fs.readFileSync(stdin).toString().trim().split('\n').map(s => +s);

