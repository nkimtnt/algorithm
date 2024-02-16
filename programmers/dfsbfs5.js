/**
 * 여행경로
 * https://school.programmers.co.kr/learn/courses/30/lessons/43164
 */

// 큐에 넣어야 할 것 같은 느낌?
// bfs 인가
// 조건 추가 -> 같은 경우 -> 알파벳 순서
// 큐에서 비교할때 정렬해서 비교 하면 될듯?


function solution(tickets) {
    // 도착지 기준으로 알파벳 순 정렬
    // 맞아 이렇게 해도 결국 인천 시작부터 지정하면 되니까 같은 출발지일때 도착지 빠른 것부터 적용될듯
    tickets.sort((a, b) => a[1].localeCompare(b[1]));

    const visitMap = {}; // 각 공항에서 출발하는 티켓의 사용 여부를 추적
    for (let i = 0; i < tickets.length; i++) {
        const [from, to] = tickets[i];
        if (!visitMap[from]) visitMap[from] = [];
        visitMap[from].push([to, false]); // 도착지와 사용 여부(false)를 함께 저장
    }

    console.log('visitMap', visitMap);

    const route = ['ICN']; // 경로를 저장하는 배열, "ICN"에서 출발
    function dfs(currentAirport) {
        if (route.length === tickets.length + 1) {
            // 모든 티켓을 사용했으면 true 반환
            return true;
        }

        if (!visitMap[currentAirport]) {
            // 현재 공항에서 출발하는 티켓이 없으면 false 반환
            return false;
        }

        for (let i = 0; i < visitMap[currentAirport].length; i++) {
            const [nextAirport, visited] = visitMap[currentAirport][i];
            if (!visited) {
                // 티켓을 아직 사용하지 않았으면
                visitMap[currentAirport][i][1] = true; // 티켓을 사용했다고 표시
                route.push(nextAirport); // 경로에 추가

                if (dfs(nextAirport)) {
                    // 다음 공항에서의 탐색이 성공적이면 true 반환
                    return true;
                }
                // 다음 공항에서의 탐색이 실패하면 이전 상태로 되돌림
                route.pop();
                visitMap[currentAirport][i][1] = false;
            }
        }
        return false;
    }

    dfs('ICN');
    return route;
}


console.log('---answer--- : ', solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN']]));

