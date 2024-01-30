/**
 * 단속카메라
 * https://school.programmers.co.kr/learn/courses/30/lessons/42884
 */

// 모두가 공통된 곳에 들어가야 하는데
// 그래프로 연결해서 풀면 되긴 할거같은데?
// 무슨 유니온-find 그래프 있지 않음?
// 같은 노드에 속해 하나라도 들어 있게끔 해야하나?

// 고민하면 무얼하나 -> 그래프도 아니고 유니온-파인드도 아니고
// 그냥 잘 생각해서 풀면 되는거였음
// 정렬은 생각했고
// 카메라 카운트 세팅
// 카메라 포지션을 초기(최소 수치로 설정) -> 다음 카메라(차의 아웃 포인트)
// 끝... ㅠㅠ..
function solution(routes) {
    // 차량의 나가는 지점을 기준으로 정렬
    routes.sort((a, b) => a[1] - b[1]);

    let cameraCount = 0;
    let cameraPosition = -30001; // 초기 카메라 위치를 고속도로의 최소 범위로 설정

    for (const route of routes) {
        const enterPoint = route[0];
        const exitPoint = route[1];

        // 현재 차량의 진입 지점이 카메라 위치보다 크면 카메라를 현재 차량의 나가는 지점에 설치
        if (enterPoint > cameraPosition) {
            cameraPosition = exitPoint;
            cameraCount++;
        }
    }

    return cameraCount;
}

console.log('---answer--- : ', solution([[-20, -15], [-14, -5], [-18, -13], [-5, -3]]));

