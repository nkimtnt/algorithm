/**
 * 집합
 * https://www.acmicpc.net/problem/14501
 */

// 이거 시간초과 + 메모리 초과
// 비트마스킹 써야함

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const input = fs.readFileSync(stdin).toString().trim().split('\n');

let answer = '';

const funcA = (input) => {
    let aSet = new Set();

    input.forEach(s => {
        const [act, num] = s.split(' ');

        switch (act) {
            case 'add' : {
                aSet.add(+num);
                break;
            }
            case 'remove': {
                aSet.delete(+num);
                break;
            }
            case 'check': {
                aSet.has(+num) ? answer += '1 \n' : answer += '0 \n';
                break;
            }
            case 'toggle': {
                aSet.has(+num) ? aSet.delete(+num) : aSet.add(+num);
                break;
            }
            case 'all': {
                aSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
                break;
            }
            case 'empty': {
                aSet.clear();
                break;

            }
            default: {
                break;
            }
        }
    });

    return answer.slice(0, -1);
};


console.log(funcA(input));
