/**
 * 카펫
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 */

function solution(brown, yellow) {
    // 총 개수
    const total = brown + yellow;

    // 최소 가로 길이를 3으로 고정 -> 노란색이 1일 시 갈색은 최소 3
    // 가로로 나누어 떨어진다면 세로 길이 구하고
    // 구한 값이 노랑색 총 개수와 같다면 반환
    for (let width = 3; width <= total / 3; width++) {
        if (total % width === 0) {
            const height = total / width;
            if ((width - 2) * (height - 2) === yellow) {
                // 가로, 세로 순서로 반환
                return [height, width];
            }
        }
    }
}

console.log('---answer--- : ', solution(10, 2));

