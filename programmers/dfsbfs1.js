/**
 * 타겟 넘버
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

// dfs 인지 bfs 인지?
// 총 연산 횟수 500만번 이하면 가능하다!
// 2*20 = 1048576
// 각 인덱스마다 + / - 연산을 모두 수행해서 타겟과 일치하면 answer++
// 스택 / 큐 ??
// 재귀로 일단 반복하면 되는데 -> 스택 // 왜?? 그치 재귀는 스택이지 만족하면 다음 스택으로 넘어가서 수행

function solution(numbers, target) {
    let answer = 0;
    // 재귀
    const dfs = (idx, sum) => {
        console.log('idx', idx);
        console.log('sum', sum);
        // 탈출 조건 작성
        if (idx === numbers.length) {
            if (sum === target) {
                answer++;
            }

            return;
        }
        // 수행 동작 작성
        dfs(idx + 1, sum + numbers[idx]);
        console.log(1);
        console.log('idx22', idx);
        console.log('sum22', sum);
        dfs(idx + 1, sum - numbers[idx]);
    };

    dfs(0, 0);

    return answer;
}

console.log('---answer--- : ', solution([1, 1, 1, 1, 1], 3));

