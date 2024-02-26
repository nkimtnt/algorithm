/**
 * 동전 0
 * https://www.acmicpc.net/problem/11047
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [input, ...rest] = fs.readFileSync(stdin).toString().trim().split('\n');

const [_, K] = input.split(' ');
const coins = rest.map(s => +s);

// dp -> 사용하면 전체를 다 메모해버림
// 그리디 -> 배수라고 조건에 정해줘서 가능! 큰것부터 소모할만큼 소모하면 최소임
const greedy = (coins, K) => {
    // 큰 동전부터 몇개 사용했는지 기록하고
    // 목표에서 차감
    let count = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
        const minus = Math.floor(K / coins[i]);
        K -= minus * coins[i];
        count += minus;
    }

    return count;
};

console.log(greedy(coins, +K));


// function minCoins(coins, amount) {
//     // 금액에 따른 최소 동전 수를 저장할 배열을 초기화합니다.
//     const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
//     dp[0] = 0; // 금액이 0일 때는 동전이 필요 없습니다.
//
//     // console.log('dp', dp);
//     // 모든 동전에 대해 반복합니다.
//     for (let coin of coins) {
//         // 각 금액에 대해 최소 동전 수를 계산합니다.
//         for (let j = coin; j <= amount; j++) {
//             dp[j] = Math.min(dp[j], dp[j - coin] + 1);
//         }
//     }
//
//     // 목표 금액을 만들 수 없으면 -1을 반환합니다.
//     console.log('dp', dp);
//     return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
// }