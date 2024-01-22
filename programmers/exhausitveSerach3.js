/**
 * 소수 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 */

function solution(numbers) {
    // 소수 판단
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    // 재귀로 순열 조합을 만들고 판단
    const getPermutations = (arr) => {
        const result = [];

        const generatePermutations = (current, remaining) => {
            if (current.length > 0) {
                const number = parseInt(current.join(''));
                if (isPrime(number) && !result.includes(number)) {
                    result.push(number);
                }
            }

            for (let i = 0; i < remaining.length; i++) {
                const newCurrent = current.concat(remaining[i]);
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                generatePermutations(newCurrent, newRemaining);
            }
        };

        generatePermutations([], arr);
        return result;
    };

    const numbersArray = numbers.split('').map(Number);
    const permutations = getPermutations(numbersArray);

    return permutations.length;
}

console.log('---answer--- : ', solution('011'));

