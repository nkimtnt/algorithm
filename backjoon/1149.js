/**
 * RGB거리
 * https://www.acmicpc.net/problem/1149
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const input = fs.readFileSync(stdin).toString().trim().split('\n');

const num = +input.shift();
const numArr = input.map(s => s.split(' ').map(s => +s));

// 문제가 원하는건 주어진 num 만큼의 집
// 각 집마다 RGB 비용
// N-1, N , N+1 의 색이 겹치지 않는 최소 비용

// 상향 하향 메모
// 루프 메모 같은데?
// 뭘 메모? -> 각 자리마다 다음 집과의 합산 비용

console.log('---numArr---', numArr);

const dp = [];
dp.push(Math.min(...numArr[0]));

console.log('dp', dp);

for (let i = 1; i < numArr.length; i++) {
    let max;
}


// console.log(1);