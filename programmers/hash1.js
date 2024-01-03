/**
 * 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
 */

function solution(participant, completion) {
    const join = new Map();

    participant.forEach((p) => {
        if (join.has(p)) {
            console.log('join.values(p)', join.values(p));
            join.set(p, +join.get(p) + 1);
        } else {
            join.set(p, 1);
        }
        console.log('join', join);
    });

    completion.forEach((p) => {
        if (+join.get(p) > 1) {
            join.set(p, +join.get(p) - 1);
        } else {
            join.delete(p);
        }
    });

    // console.log(join);
    console.log(join.keys().next().value);

    return join.keys().next().value;
}

solution(['leo', 'kiki', 'kiki', 'eden'], ['eden', 'leo', 'kiki']);
