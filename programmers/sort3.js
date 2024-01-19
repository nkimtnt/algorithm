/**
 * H-Index
 * https://school.programmers.co.kr/learn/courses/30/lessons/42747
 */

function solution(citations) {
    let answer = 0;
    const temp = citations.sort((a, b) => a - b);

    for (let i = 0; i < citations.length; i++) {
        // 현재 값이 자신의 위치 이후의 총 개수보다 같거나 큰 경우 H-Index
        const high = temp.length - i;

        if (temp[i] >= high) {
            answer = high;
            break;
        }
    }

    return answer;
}

console.log('---answer--- : ', solution([1, 2, 2, 2, 3, 4, 5]));

