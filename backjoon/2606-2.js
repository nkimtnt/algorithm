/**
 * 바이러스 2회차?
 * https://www.acmicpc.net/problem/2606
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const [N, M, ...temp] = fs.readFileSync(stdin).toString().trim().split('\n');
const tempArr = temp.map(s => {
    return s.split(' ').map(s => +s);
});


const aaa = (node) => {
    const graph = Array.from(Array(+N + 1), () => []);

    // 그래프 생성
    tempArr.forEach(temp => {
        graph[temp[0]].push(temp[1]);
        graph[temp[1]].push(temp[0]);
    });

    const visited = new Set();
    visited.add(1);

    const queue = [];
    graph[1].forEach(node => queue.push(node));

    while (queue.length) {
        const nowNode = queue.shift();

        // 방문하지 않은 노드
        if (!visited.has(nowNode)) {
            visited.add(nowNode);
            graph[nowNode].forEach(node => {
                if (!visited.has(node)) {
                    queue.push(node);
                }
            });
        }
    }

    // node 1 제거
    return visited.size - 1;
};

console.log(aaa(1));

// union-find 써서 부모가 1인 아이들 다 찾아내면 되는거 아님?
// 이차원 배열 N 개 만들고 -> 아니지 1차원 배열로 연결시키면 되지
// [0, 1, 1, 2, 7, 1, 5, 4];
// -> 그래프는 만들어야하니 2차원 배열도 필요하겠네

// const aaa = (tempArr) => {
//     const graph = Array.from(Array(+N + 1), () => []);
//     const parent = [];
//     console.log('tempArr', tempArr);
//
//     // 그래프 생성
//     tempArr.forEach(temp => {
//         graph[temp[0]].push(temp[1]);
//         graph[temp[1]].push(temp[0]);
//     });
//
//     // 부모 생성
//     parent.push(0);
//     parent.push(1);
//     for (let i = 2; i < graph.length; i++) {
//         parent.push(graph[i][0]);
//     }
//
//     // 그래프 순회 하면서 재귀? 로 해야할거같은데
//     // 부모의 부모를 찾아서 계속 업데이트 해주면서 나오기
//
//     const aa = (arr, idx) => {
//         // 탈출 조건 부모와 내 부모가 같다 or 양방향
//         if (parent[idx] === parent[arr[0]] || arr[0] === graph[arr[0]]) {
//             return;
//         }
//
//         // 부모의 부모 확인
//         arr[0];
//     };
//
//
//     console.log('parent', parent);
//     console.log('graph', graph);
//
//     return 1;
// };
//
// console.log(aaa(tempArr));