/**
 * 피로도
 * https://school.programmers.co.kr/learn/courses/30/lessons/87946
 */

function solution(k, dungeons) {
    let answer = -1;

    // 바람의나라? -> 이걸로 구현했니?
    // 재귀로 풀어야할거같은데? (현재 입장 가능한 피로도가 계속 변함)
    // 현재 피로도와 같거나 작은 아이들만 추리기?
    // 빼 준 아이들에서 누구를 빼야하나? -> 모르겠다? 소모값이 적은 아이? 어떻게 비교??
    // 그냥 케이스별로 다 재귀로 돌면서 저장하고 최대값 리턴하는 방향으로 해야겠다?


    return answer;
}

console.log('---answer--- : ', solution(80, [[80, 20], [50, 40], [30, 10]]));

