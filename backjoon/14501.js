/**
 * 퇴사
 * https://www.acmicpc.net/problem/14501
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const input = fs.readFileSync(stdin).toString().trim().split('\n');

const num = +input.shift();
const data = input.map(s => {
    const temp = s.split(' ');
    return [+temp[0], +temp[1]];
});

data.unshift([]);

// 이것도 비슷하게 max - current 를 나눠서 더해가면서 찾아보면 될 것 같다!
// 어..? 안되겠는데? -> 날마다 따로 저장해서 해야할 듯?
// const doSpit4 = (n, arr) => {
//
//     console.log('data', data);
//
//     for (let i = 1; i < arr.length; i++) {
//         let today = 1;
//         let maxSum = arr[i][1];
//
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[today + arr[i][0]] && j === today) {
//                 today += arr[j][0];
//                 maxSum += arr[j][1];
//             }
//             today++;
//         }
//
//         dp.push(maxSum);
//
//
//         console.log('day', today);
//         console.log('maxSum', maxSum);
//     }
//
//     console.log('dp', dp);
//     return Math.max(...dp);
// };

const doSpit4 = (n, arr) => {
    // 애지간하면 dp 배열 생성해서 채워넣고 시작
    const dp = Array(n + 2).fill(0);

    for (let i = n; i >= 1; i--) {
        // 해당 날부터의 최대 이익(뒤에서부터)
        let maxSum = 0;

        // 해당 날부터의 최대 이익을 계산
        for (let j = i + arr[i][0]; j <= n + 1; j++) {
            maxSum = Math.max(maxSum, dp[j]);
        }

        if (i + arr[i][0] <= n + 1) {
            // 현재 날 상담을 하는 경우와 하지 않는 경우 중 큰 값 선택
            dp[i] = Math.max(arr[i][1] + maxSum, dp[i + 1]);
        } else {
            // 현재 날 상담을 할 수 없는 경우 -> 0 혹은 이전 최대 값
            dp[i] = dp[i + 1];
        }
    }
    return dp[1];
};


console.log(doSpit4(num, data));
