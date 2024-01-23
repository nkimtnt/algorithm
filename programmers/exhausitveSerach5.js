/**
 * 피로도
 * https://school.programmers.co.kr/learn/courses/30/lessons/87946
 */

// 순열 사용 -> DFS 방법도 찾아보자!
// 순열이나 DFS 나 둘 다 시간복잡도가 O(n!) 이라서 DP 쓰라는데..?
// ㅇ_ㅇ;;;
function permute(arr) {
    const result = [];
    const dfs = (current, remaining) => {
        if (current.length === arr.length) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            const nextRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            dfs(current, nextRemaining);
            current.pop();
        }
    };
    dfs([], arr);
    return result;
}

function exploreDungeons(k, dungeonsOrder, dungeons) {
    let currentFatigue = k;
    let count = 0;
    for (const dungeonIndex of dungeonsOrder) {
        const requiredFatigue = dungeons[dungeonIndex][0];
        const consumedFatigue = dungeons[dungeonIndex][1];
        if (currentFatigue >= requiredFatigue) {
            currentFatigue -= consumedFatigue;
            count++;
        } else {
            break;
        }
    }
    return count;
}

function solution(k, dungeons) {
    const dungeonIndices = dungeons.map((_, index) => index);
    const allOrders = permute(dungeonIndices);
    let maxCount = 0;
    for (const order of allOrders) {
        const count = exploreDungeons(k, order, dungeons);
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}


// DFS

// let answer = 0;
// let visited;
//
// function solution(k, dungeons) {
//     visited = new Array(dungeons.length).fill(false);
//     dfs(0, k, dungeons);
//     return answer;
// }
//
// function dfs(cnt, k, dungeons) {
//     for (let i = 0; i < dungeons.length; i++) {
//         if (visited[i] || dungeons[i][0] > k) continue;
//
//         visited[i] = true;
//         dfs(cnt + 1, k - dungeons[i][1], dungeons);
//         visited[i] = false;
//     }
//     answer = Math.max(cnt, answer);
// }

console.log('---answer--- : ', solution(80, [[80, 20], [50, 40], [30, 10]]));

