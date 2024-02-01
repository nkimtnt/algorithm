const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n').map(s => +s);

const fibo = num => {
    const memo = new Map();

    const calculateFibo = n => {
        if (n <= 0) return 0;
        if (n === 1) return 1;

        if (n >= 2 && memo.has(n)) {
            return memo.get(n);
        }

        const result = calculateFibo(n - 1) + calculateFibo(n - 2);
        memo.set(n, result);

        return result;
    };

    return calculateFibo(num);
};

const solution = input => {
    const uniqueInput = new Set(input);
    return Array.from(uniqueInput.values()).map(num => {
        fibo(num);
        return `${num === 0 ? 1 : fibo(num - 1)} ${fibo(num)}`;
    }).join('\n');
};

// 안ㅁ어ㅏ 개빡치네
// 이 멍청이들 Map 써서 유니크 보장하면되지 ㅋㅋ 했는데
// 순서 보장이 안되네?? ㅣㅏㅁ너기ㅏ머 ㅏㅣ머ㅣㅏㄴ머ㅏㅣ어ㅣㅏ
// 그냥 닥치고 배열 생성해서 인덱스로 메모 해야겠습니다.
// 속도좀 올려보겠다고 했다가 문제가 -_-....

console.log('---answer--- : ', solution(input));