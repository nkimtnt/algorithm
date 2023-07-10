// const input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
// const N = input.shift();
// const arr = input.map((item) => item.split('').map(Number));

// function bfs(x, y) {
//     const queue = [[x, y]];
//     const visited = {};
//     visited[[x, y]] = true;
//     visitedCoords[[x, y]] = true;
//     let dx = [0, 0, 1, -1];
//     let dy = [-1, 1, 0, 0];
//     let cnt = 1;

//     while (queue.length) {
//         for (let i = 0; i < queue.length; i++) {
//             let X = queue.shift();
//             for (let j = 0; j < 4; j++) {
//                 let nx = X[0] + dx[j];
//                 let ny = X[1] + dy[j];
//                 if (
//                     nx >= 0 &&
//                     ny >= 0 &&
//                     nx < arr.length &&
//                     ny < arr.length &&
//                     // 좌표의 유효성 확인
//                     arr[nx][ny] === 1 &&
//                     // 1일 경우에만 진행되므로 1인 경우만 좌표 출력
//                     !visited[[nx, ny]]
//                     // visited 확인
//                 ) {
//                     visited[[nx, ny]] = true;
//                     visitedCoords[[nx, ny]] = true;
//                     cnt++;
//                     queue.push([nx, ny]);
//                 }
//             }
//         }
//     }
//     return cnt;
// }

// // 정답 출력을 위해 좌표를 순회할때, 중복된 좌표를 순회하지 않기 위해서 추가로 삽입한 객체
// // 여기서, ture로 지정된 좌표는 더이상 순회하지 않는다.
// const visitedCoords = {};
// const answer = [];
// for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//         if (arr[i][j] === 1 && !visitedCoords[[i, j]]) answer.push(bfs(i, j));
//     }
// }

// console.log(answer.length);
// answer.sort((a, b) => a - b);
// answer.forEach((item) => console.log(item));

// // 출처 https://velog.io/@otterp/%EB%B0%B1%EC%A4%80-2667-%EB%8B%A8%EC%A7%80%EB%B2%88%ED%98%B8-%EB%B6%99%EC%9D%B4%EA%B8%B0-javascript
const input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
const N = +input.shift();
const arr = input.map((item) => item.split('').map(Number));

function bfs(x, y) {
    const queue = [[x, y]];
    const visited = new Set();
    visited.add(`${x},${y}`);
    let dx = [0, 0, 1, -1];
    let dy = [-1, 1, 0, 0];
    let cnt = 1;

    while (queue.length) {
        let [currX, currY] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = currX + dx[i];
            let ny = currY + dy[i];
            let coord = `${nx},${ny}`;

            if (nx >= 0 && ny >= 0 && nx < N && ny < N && arr[nx][ny] === 1 && !visited.has(coord)) {
                visited.add(coord);
                cnt++;
                queue.push([nx, ny]);
            }
        }
    }
    return cnt;
}

const visitedCoords = new Set();
const answer = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (arr[i][j] === 1 && !visitedCoords.has(`${i},${j}`)) {
            visitedCoords.add(`${i},${j}`);
            answer.push(bfs(i, j));
        }
    }
}

console.log(answer.length);
answer.sort((a, b) => a - b);
answer.forEach((item) => console.log(item));
