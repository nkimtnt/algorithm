/**
 * 가장 큰 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 */

function solution(numbers) {
    // numbers 순회
    // 삽입 정렬 비스무리 한 방식으로
    // 맨 처음 수와 다음 수의 콤비네이션을 2개(앞 뒤 순서 변경) 만들어서 대소 비교 후 큰 쪽 수 생성
    // 그렇게 만들다보면 만들어질듯?

    for (let i = 0; i < numbers.length - 1; i) {
        const a = String(numbers[i]) + String(numbers[i + 1]);
        const b = String(numbers[i + 1]) + String(numbers[i]);

        let temp = +a >= +b ? a : b;

        numbers.splice(0, 2);
        numbers.unshift(+temp);
    }

    return numbers[0] + '';
}

console.log('---answer--- : ', solution([6, 10, 2]));

