/**
 * 프로세스
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 */

// for 문으로 인덱스 확인하면서 돌리면 안되고 while 로 돌려야 계속 돌아감
function solution(priorities, location) {
    let answer = 0;

    while (priorities.length > 0) {
        // 0번째만 비교
        const now = priorities.shift();

        if (priorities.some((num) => num > now)) {
            // 무조건 뒤에 나오는 숫자가 클 때만 큐에 다시 쌓음
            priorities.push(now);
        } else {
            answer++;
            if (location === 0) {
                break;
            }
        }

        // 큐를 배열로 만들어서 idx 찾는 방법
        // 찾고자 하는 인덱스에서 쉬프트로 하나 빠졌으니까 인덱스 하나 차감
        // 0번째인 경우 음수가 되니까 양수로 만들면서 순서 찾기 위해 배열의 길이만큼 더해줌
        // 배열로 나누어 나머지 구하면 인덱스 두둥등장!
        location = (location - 1 + priorities.length) % priorities.length;
    }

    return answer;
}

console.log('---answer--- : ', solution([2, 1, 1, 4, 3, 4, 5], 2));
