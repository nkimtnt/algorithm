/**
 * 최소직사각형
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */

function solution(answers) {
    const answer = [];
    
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let correctA = 0;
    let correctB = 0;
    let correctC = 0;

    for (let i = 0; i < answers.length; i++) {
        const aAnswerIdx = i % a.length;
        const bAnswerIdx = i % b.length;
        const cAnswerIdx = i % c.length;

        if (answers[i] === a[aAnswerIdx]) correctA++;
        if (answers[i] === b[bAnswerIdx]) correctB++;
        if (answers[i] === c[cAnswerIdx]) correctC++;
    }

    const maxCorrect = Math.max(correctA, correctB, correctC);

    if (correctA === maxCorrect) answer.push(1);
    if (correctB === maxCorrect) answer.push(2);
    if (correctC === maxCorrect) answer.push(3);

    return answer;
}

console.log('---answer--- : ', solution([1, 3, 2, 4, 2]));

