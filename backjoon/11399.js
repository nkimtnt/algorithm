/**
 * ATM
 * https://www.acmicpc.net/problem/11399
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [_, temp] = fs.readFileSync(stdin).toString().trim().split('\n');
const time = temp.split(' ').map(s => +s);


const aaa = (time) => {
    let count = 0;
    const temp = [0];
    const pq = time.sort((a, b) => a - b);

    for (let i = 0; i < pq.length; i++) {
        temp.push(temp[i] + pq[i]);
        count += temp[i] + pq[i];
    }

    return count;
};

console.log(aaa(time));

