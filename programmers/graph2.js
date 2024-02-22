/**
 * 순위
 * https://school.programmers.co.kr/learn/courses/30/lessons/49191
 */

function solution(n, results) {
    // 초기화: 선수들 사이의 승패 관계를 나타내는 2차원 배열
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

    // 경기 결과를 바탕으로 승패 관계 설정
    results.forEach(([winner, loser]) => {
        graph[winner][loser] = true; // 승리한 선수 -> 패배한 선수 관계를 true로 설정
    });

    // 플로이드-워셜 알고리즘 적용
    // k = 거쳐가는 노드
    for (let k = 1; k <= n; k++) {
        // i = 출발 노드
        for (let i = 1; i <= n; i++) {
            // j = 도착 노드 -> 여기서 체크하는구나! 이긴놈을 또 이긴 경우!
            for (let j = 1; j <= n; j++) {
                if (graph[i][k] && graph[k][j]) {
                    graph[i][j] = true;
                }
            }
        }
    }

    // 정확한 순위를 매길 수 있는 선수의 수 계산
    // -> 나와 연관된 승 패 의 수가 n-1 개면 명확
    // 여기서 궁금한건 5번은 어떻게??
    let count = 0;

    console.log('graph', graph);
    for (let i = 1; i <= n; i++) {
        let resultCount = 0;
        for (let j = 1; j <= n; j++) {
            if (graph[i][j] || graph[j][i]) {
                resultCount++;
            }
        }
        // 자신을 제외한 모든 선수와의 승패 관계가 명확한 경우
        if (resultCount === n - 1) {
            count++;
        }
    }

    return count;
}

console.log('---answer--- : ', solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));

