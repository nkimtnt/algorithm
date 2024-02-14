/**
 * 네트워크
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 */

function solution(n, computers) {
    let count = 0; // 네트워크의 개수
    const visited = new Array(n).fill(false); // 방문한 컴퓨터 체크 배열

    // DFS 함수 정의
    function dfs(index) {
        visited[index] = true; // 현재 컴퓨터를 방문 처리
        for (let i = 0; i < n; i++) {
            // 현재 컴퓨터와 연결되어 있고 아직 방문하지 않은 컴퓨터가 있다면 DFS 탐색 계속
            if (computers[index][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    // 모든 컴퓨터에 대해 DFS 탐색을 시도하고, 새로운 네트워크를 찾을 때마다 count 증가
    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 아직 방문하지 않은 컴퓨터에 대해서만 DFS 실행
            dfs(i);
            count++; // 새 네트워크 발견
        }
    }

    return count; // 네트워크의 개수 반환
}

console.log('---answer--- : ', solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));

