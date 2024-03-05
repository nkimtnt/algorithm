/**
 * 구간 합 구하기 4
 * https://www.acmicpc.net/problem/11659
 */

// 메모 해서 풀어야함!
const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [_, tempM, ...temp] = fs.readFileSync(stdin).toString().trim().split('\n');
const numArr = tempM.split(' ').map(s => +s);
const input = temp.map(s => {
    return s.split(' ').map(s => +s);
});

const prefixSum = [0]; // 누적 합을 저장할 배열, 0으로 시작
for (let i = 0; i < numArr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + numArr[i];
}

const aaa = (prefixSum, input) => {
    const answer = [];

    input.forEach(arr => {
        // 누적 합을 사용하여 구간 합 계산
        const sum = prefixSum[arr[1]] - prefixSum[arr[0] - 1];
        answer.push(sum);
    });

    return answer.join('\n');
};

console.log(aaa(prefixSum, input));


// 시간 초과
// const fs = require('fs');
// const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
// const [_, tempM, ...temp] = fs.readFileSync(stdin).toString().trim().split('\n');
// const numArr = tempM.split(' ').map(s => +s);
// const input = temp.map(s => {
//     return s.split(' ').map(s => +s);
// });
//
// const aaa = (numArr, input) => {
//     const answer = [];
//
//     input.forEach(arr => {
//         let sum = 0;
//         for (let i = arr[0] - 1; i < arr[1]; i++) {
//             sum += numArr[i];
//         }
//         answer.push(sum);
//     });
//
//     return answer.join('\n');
// };
//
// console.log(aaa(numArr, input));

