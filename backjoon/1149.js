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

const dp = [numArr[0]];

for (let i = 1; i < numArr.length; i++) {
    // dp 에 한칸씩 배열 추가
    dp.push(Array(3).fill([]));

    // 최솟값을 자신이 속해있지 않은 두 색에서 비교 후 자신과 더해서 최솟값 갱신
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + numArr[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + numArr[i][1];
    dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + numArr[i][2];
}

// 마지막 배열에서 최소인 수 고름
console.log(Math.min(...dp[num - 1]));

