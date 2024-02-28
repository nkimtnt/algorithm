/**
 * 계단 오르기
 * https://www.acmicpc.net/problem/2579
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [N, ...steps] = fs.readFileSync(stdin).toString().trim().split('\n').map(s => +s);

const aaa = (steps) => {
    if (+N === 1) return steps[0];
    // [[{ 1: 10 }], [{ 2: 30 }], [{ 1: 25 }], [{ 1: 55 }, { 2: 50 }], [{ 2: 65 }], [{ 2: 75 }, { 1: 70 }]];
    // [[10,false], [false,30], [25, false], [55, 50], [false, 65], [70, 75]]

    let cost = Array.from(Array(Math.max(+N, 2)), () => [0, 0]);
    cost[0][0] = steps[0];
    cost[1][0] = steps[1];
    cost[1][1] = steps[0] + steps[1];

    for (let i = 2; i < +N; i++) {
        cost[i][0] = Math.max(cost[i - 2][0], cost[i - 2][1]) + steps[i];
        cost[i][1] = cost[i - 1][0] + steps[i];
    }

    return Math.max(cost[+N - 1][0], cost[+N - 1][1]);
};

console.log(aaa(steps));