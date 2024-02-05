/**
 * 연속합
 * https://www.acmicpc.net/problem/1912
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [tempNum, tempNumArr] = fs.readFileSync(stdin).toString().trim().split('\n');

const num = +tempNum;
const numArr = tempNumArr.split(' ').map(num => +num);

function maxSubarraySum(n, arr) {
    let maxSum = arr[0];  // 현재까지의 최대 연속 부분합
    let currentSum = arr[0];  // 현재 원소를 포함한 이전까지의 최대 연속 부분합

    for (let i = 1; i < n; i++) {
        // 내가 포함된 부분합보다 내가 더 크다면 currentSum 갈아치우기
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        // 갈아치운 currentSum 이 지금까지의 maxSum 보다 크다면 갈아치우기
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubarraySum(num, numArr));