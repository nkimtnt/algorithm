/**
 * 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
 */

function solution(participant, completion) {
    const join = new Map();

    participant.forEach((p) => {
        if (join.has(p)) {
            join.set(p, +join.get(p) + 1);
        } else {
            join.set(p, 1);
        }
    });

    completion.forEach((p) => {
        if (+join.get(p) > 1) {
            join.set(p, +join.get(p) - 1);
        } else {
            join.delete(p);
        }
    });

    return join.keys().next().value;
}

solution(['leo', 'kiki', 'kiki', 'eden'], ['eden', 'leo', 'kiki']);

// 로그를 찍으면 테스트 케이스에서 시간 초과가 난다.
// 시간복잡도는 O(2N) 일텐데 줄일 수 있는 방법이 있는지는 모르겠다.
