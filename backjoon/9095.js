/**
 * 1,2,3 더하기
 * https://www.acmicpc.net/problem/9095
 */

// const fs = require('fs');
// const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
// const input = fs.readFileSync(stdin).toString().trim().split('\n').map(s => +s);
// const N = input.shift();
//
// // dp 이며 점화식이며 1,2,3 으로 각각 나눠서 배열에 메모!
// const aaa = (input) => {
//     let answer = '';
//
//     for (let i = 0; i < input.length; i++) {
//         let dp = new Array(3).fill(0).map(() => new Array(input[i] + 1).fill(1));
//         let num = input[i];
//
//         console.log('dp', dp);
//
//         for (let j = 1; j < 3; j++) {
//             for (let k = 1; j < dp[j].length; k++) {
//                 dp[j][k] = dp[j - 1][k] + dp[j][num - j];
//             }
//         }
//         answer += `${dp[2][num] - 1}`;
//     }
//
//
//     //        0 1 2 3 4 5 6 7  8  9 10
//     //    1   1 1 1 1 1 1 1 1  1  1  1
//     //   12   1 1 2 2 3 3 4 4  5  5  6
//     //  123   1 1 2 3 4 5 7 8 10 12 14
//     //
//     // 11
//     // 2
//     //
//     // 111
//     // 12
//     //
//     // 1111
//     // 112
//     // 22
//     //
//     // 11111
//     // 1112
//     // 122
//
//
//     return answer;
// };
//
// console.log(aaa(input));

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const input = fs.readFileSync(stdin).toString().trim().split('\n').map(s => +s);
const N = input.shift();

const solve = (input) => {
    let answers = [];

    for (let num of input) {
        let dp = new Array(num + 1).fill(0);
        dp[0] = 1; // 0을 만드는 방법은 아무것도 선택하지 않는 것 1가지

        console.log('dp', dp);

        for (let i = 1; i <= num; i++) {
            if (i - 1 >= 0) dp[i] += dp[i - 1];
            if (i - 2 >= 0) dp[i] += dp[i - 2];
            if (i - 3 >= 0) dp[i] += dp[i - 3];
        }

        answers.push(dp[num]);
    }

    return answers.join('\n');
};

console.log(solve(input));