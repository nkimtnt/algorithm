/**
 * K번째수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 */

function solution(array, commands) {
    const answer = [];

    for (const cm of commands) {
        const temp = array.slice(cm[0] - 1, cm[1]);
        temp.sort((a, b) => a - b);

        answer.push(temp[cm[2] - 1]);
    }

    return answer;
}

console.log('---answer--- : ', solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

