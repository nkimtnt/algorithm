/**
 * 입국심사
 * https://school.programmers.co.kr/learn/courses/30/lessons/43238
 */


// 재귀 n 번
// 긑나는 시간을 기준으로 계산을 해야됨
// 시간이 필요하고 하나씩 지나갈때마다 해야하나

// -> 이렇게
function solution(n, times) {
    times.sort((a, b) => a - b); // 오름차순 정렬
    return binarySearch(times, n, times[times.length - 1]);
}

function binarySearch(times, n, max) {
    let left = 1;
    // 최대로 걸리는 시간
    let right = max * n;
    let ans = Number.MAX_SAFE_INTEGER;

    while (left <= right) {
        // 작은값 선택
        const mid = Math.floor((left + right) / 2);

        if (isPassed(times, n, mid)) {
            // 둘 중 뭐가 더 작냐 판단
            ans = Math.min(ans, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}

function isPassed(times, n, mid) {
    let amount = 0;

    for (let time of times) {
        console.log('mid', mid);
        console.log('time', time);

        amount += Math.floor(mid / time);
        console.log('amount', amount);
    }

    return amount >= n;
}

console.log('---answer--- : ', solution(6, [7, 10]));

