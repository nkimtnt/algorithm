/**
 * 피보나치함수
 * https://www.acmicpc.net/problem/1003
 */

// const fs = require('fs');
// const input = fs.readFileSync('./example.txt').toString().trim().split('\n').map(s => +s);
//
// const fibo = num => {
//     const memo = new Map();
//
//     const calculateFibo = n => {
//         if (n <= 0) return 0;
//         if (n === 1) return 1;
//
//         if (n >= 2 && memo.has(n)) {
//             return memo.get(n);
//         }
//
//         const result = calculateFibo(n - 1) + calculateFibo(n - 2);
//         memo.set(n, result);
//
//         return result;
//     };
//
//     return calculateFibo(num);
// };
//
// const solution = input => {
//     const uniqueInput = new Set(input);
//     return Array.from(uniqueInput.values()).map(num => {
//         fibo(num);
//         return `${num === 0 ? 1 : fibo(num - 1)} ${fibo(num)}`;
//     }).join('\n');
// };

// 안ㅁ어ㅏ 개빡치네
// 이 멍청이들 Map 써서 유니크 보장하면되지 ㅋㅋ 했는데
// 순서 보장이 안되네?? ㅣㅏㅁ너기ㅏ머 ㅏㅣ머ㅣㅏㄴ머ㅏㅣ어ㅣㅏ
// 그냥 닥치고 배열 생성해서 인덱스로 메모 해야겠습니다.
// 속도좀 올려보겠다고 했다가 문제가 -_-....

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const num = fs.readFileSync(stdin).toString().trim().split('\n').map(s => +s);

num.shift();

let memo = [[1, 0], [0, 1]];

while (num.length) {
    const x = num.shift();

    // 직전 두 개를 더해서 22가 입력시 i++ 해서 3,4,5,6 쭉쭉 더하면서 끝까지 만들어감
    // 이게 top-down? -> 큰 문제를 작은 것부터 해결하면서 풀도록 설계
    for (let i = memo.length; i <= x; i++) {
        memo.push([memo[i - 1][0] + memo[i - 2][0], memo[i - 1][1] + memo[i - 2][1]]);
    }

    console.log(memo[x].join(' '));
}