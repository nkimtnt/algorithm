/**
 * 동전 1
 * https://www.acmicpc.net/problem/2293
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const input = fs.readFileSync(stdin).toString().trim().split('\n');

const [num, cost] = input.shift().split(' ').map(s => +s);
const coinArr = input.map(s => +s);

let dp = new Array(cost + 1).fill(0);
// 합이 0 -> 동전을 하나도 던지지 않아도 되는 경우를 의미 -> 1
dp[0] = 1;

// 동전을 개수에 따라 순서대로 하나씩 경우의 수를 저장할거임
for (let i = 0; i < num; i++) {
    for (let j = coinArr[i]; j <= cost; j++) {
        console.log('dp', dp);
        console.log('i', i);
        console.log('j', j);
        console.log('coinArr[i]', coinArr[i]);
        console.log('dp[j - coinArr[i]]', dp[j - coinArr[i]]);
        // 결국 경우의 수는 이전 동전들로 만들 수 있는 경우의 수
        // + 새롭게 추가된 동전으로 만들 수 있는 경우의 수 ->
        // ?? 여기서 궁금한건 어떻게 <num-동전의값> 의 경우의 수가 새롭게 추가된 동전의 경우의 수를 대변하냐?
        dp[j] += dp[j - coinArr[i]];
    }
}

// 4 9
// 2
// 3
// 5
// 7

/// **  0 1 2 3 4 5 6 7 8 9
///  2  1 0 1 0 1 0 1 0 1 0
/// 23  1 0 1 1 1 1 2 1 2 2
///235  1 0 1 1 1 2 2 2 3 3
//2357  1 0 1 1 1 2 2 3 3 4

const answer = dp[cost];

console.log(answer);

