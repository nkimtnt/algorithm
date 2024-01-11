/**
 * 올바른 괄호
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
    let checkSum = 0;

    for (let i = 0; i < s.length; i++) {
        if (i === 0 && s[i] === ')') {
            return false;
        }

        if (s[i] === '(') {
            checkSum++;
        }

        if (checkSum !== 0 && s[i] === ')') {
            checkSum--;
        }
    }

    return !checkSum ? true : false;
}

console.log('---answer--- : ', solution(')()('));
