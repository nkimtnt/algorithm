/**
 * 비밀번호 찾기
 * https://www.acmicpc.net/problem/17219
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [first, ...temp] = fs.readFileSync(stdin).toString().trim().split('\n');

const [N, _] = first.split(' ').map(s => +s);
const savedMap = new Map(temp.splice(0, N).map(s => s.split(' ')));
const aaa = (temp) => {
    let answer = '';

    temp.forEach(s => {
        if (savedMap.has(s)) {
            answer += savedMap.get(s) + '\n';
        }
    });

    return answer;
};

console.log(aaa(temp));

