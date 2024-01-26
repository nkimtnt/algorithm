/**
 * 큰 수 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/42883
 */

function solution(number, k) {
    const stack = [];

    // 스택에 자리마다 넣어놓고 자기보다 크면 스택 버리고(계속 비교) -> 숫자의 순서가 보장됨
    // 새로 스택 쌓음
    for (let i = 0; i < number.length; i++) {
        const currentDigit = number[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < currentDigit) {
            stack.pop();
            k--;
        }
        stack.push(currentDigit);
    }
    // 예외 처리: 만약 k개를 모두 제거하지 못한 경우!
    // 이게 존재하네 줄여여 할 자리수는 남았는데
    // 뒤에 값들이 전부 직전 수보다 작아서 while 문이 돌지 않을 경우 하나가 남음
    // 그 때 남은 k 만큼 스택에서 잘라줘야함
    stack.splice(stack.length - k);

    return stack.join('');
}

console.log('---answer--- : ', solution('4177252841', 8));

