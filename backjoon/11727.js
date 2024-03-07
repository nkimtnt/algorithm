/**
 * 2xn 타일링 2
 * https://www.acmicpc.net/problem/11727
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const input = fs.readFileSync(stdin).toString().trim();

// memo
const funcA = (input) => {
    if (input === 2) {
        return 3;
    }

    const memo = [1, 3];

    for (let i = 2; i < input; i++) {
        memo[i] = (2 * memo[i - 2] + memo[i - 1]) % 10007;
    }

    return memo[input - 1] % 10007;
};


console.log(funcA(+input));
