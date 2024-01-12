/**
 * 다리를 지나는 트럭
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 */

function solution(bridge_length, weight, truck_weights) {
    // 구해야 하는 게 무엇인지 부터 정의 -> 트럭의 수만큼 모두 통과했을 때 경과한 시간!
    // 타임 세팅
    // 체크해야하는 조건 -> 다리 위의 총 무게 // 길이 - 해당 차량이 걸리는 시간

    let time = 0;
    let onBridgeW = 0;
    let onBridge = [];

    while (truck_weights.length > 0 || onBridge.length > 0) {
        // 다리 위 정보 업데이트
        if (onBridge[0]?.endTime === time) {
            onBridgeW -= onBridge[0].weight;
            onBridge.shift();
        }

        // 모두 빠졌을 시 종료
        if (!onBridge.length && !truck_weights.length) {
            time += 1;
            break;
        }

        // 진입 여부 판단
        if (weight >= onBridgeW + truck_weights[0]) {
            // 진입 가능
            onBridge.push({ endTime: time + bridge_length, weight: truck_weights[0] });
            onBridgeW += truck_weights[0];
            truck_weights.shift();
            // 시간 추가
            time += 1;
        } else {
            // 진입 불가
            // 진입 가능한 time 으로 이동
            time = onBridge[0].endTime;
        }
    }

    return time;
}

console.log('---answer--- : ', solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
