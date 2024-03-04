/**
 * 파도반 수열
 * https://www.acmicpc.net/problem/9461
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [_, ...cases] = fs.readFileSync(stdin).toString().trim().split('\n').map(Number);

const maxCase = Math.max(...cases);
const dp = Array.from({ length: maxCase + 1 }, () => 0);

// 초기 조건 설정
dp[0] = 1; // 0을 만드는 방법은 없지만, 계산을 위해 1로 설정
dp[1] = 1; // 문제에서 주어진 예시에 따름
dp[2] = 1; // 문제에서 주어진 예시에 따름
dp[3] = 1; // 문제에서 주어진 예시에 따름

// 점화식을 이용한 동적 계획법 적용
for (let i = 4; i <= maxCase; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
}

// 각 케이스에 대한 결과를 계산하여 출력
const result = cases.map(n => dp[n]).join('\n');
console.log(result);

// const fs = require('fs');
// const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
// const input = fs.readFileSync(stdin).toString().trim().split('\n').map(s => +s);
// const T = input.shift();
// console.log('input', input);
//
// const aaa = (input) => {
//     let answers = [];
//     let dp = [0, 1];
//
//     // 하나씩 돌건데요
//     // n = n-2 +n-3 인거잖아요?
//     // 세팅좀 해봅시다
//
//     for (num of input) {
//         console.log('num,', num);
//
//         if (num === 2) {
//             dp[num] = 1;
//             answers.push(dp[num]);
//             break;
//         }
//         if (num === 3) {
//             dp[num] = 1;
//             answers.push(dp[num]);
//             break;
//         }
//
//         if(num >3) {
//             for(let i= 4; i < num; i++) {
//                 dp[i] =
//             }
//         }
//
//
//     }
//
//
//     return answers.join('\n');
// };
//
// console.log(aaa(input));