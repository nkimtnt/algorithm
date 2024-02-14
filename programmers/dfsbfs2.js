/**
 * 게임 맵 최단거리
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 */

// bfs 이용해서 풀건데
// 왜 bfs 나면?? -> 깊이 우선이 아니라 인접 부터 하나씩 살필거야
// bfs -> queue
//
function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    const dx = [1, -1, 0, 0]; // 동, 서, 남, 북 방향
    const dy = [0, 0, 1, -1];

    const queue = [];
    queue.push({ x: 0, y: 0, dist: 1 });

    while (queue.length > 0) {
        console.log('maps', maps);
        console.log('queue', queue);
        const { x, y, dist } = queue.shift();
        maps[0][0] = 0; // 방문 처리

        // 도착 지점에 도달했을 경우
        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        for (let i = 0; i < 4; i++) {
            console.log('i', i);

            const nx = x + dx[i];
            const ny = y + dy[i];

            console.log('dx', dx);
            console.log('nx', nx);

            console.log('dy', dy);
            console.log('ny', ny);

            // 맵 범위를 벗어나지 않고, 벽이 아니며, 방문하지 않았을 경우
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0; // 방문 처리
                console.log('push', { x: nx, y: ny, dist: dist + 1 });
                queue.push({ x: nx, y: ny, dist: dist + 1 });
            }
        }
    }

    return -1; // 도착 지점에 도달하지 못한 경우
}

console.log('---answer--- : ', solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));

