/**
 * 1로 만들기
 * https://www.acmicpc.net/problem/1463
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
let num = Number(fs.readFileSync(stdin).toString().trim());

function getDp(num) {
    const dp = Array(num + 1).fill(0);
    for (let i = 2; i <= num; i++) {
        // 세가지 경우의 수를 비교 할 것입니다.
        // 1. +1 씩 올라가는 경우
        // 2. *2
        // 3. *3

        // 각 경우마다 횟수는 동일하게 1번씩 증가
        dp[i] = dp[i - 1] + 1;

        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }

        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }

    return dp[num];
}

console.log('---answer---', getDp(num));