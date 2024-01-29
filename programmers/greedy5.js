/**
 * 섬 연결하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/42861
 */

// 크루스칼 알고리즘(Kruskal Algorithm) - feat.Union-Find
// 최소신장트리(Minimum Spanning Tree)
// 최소 연결(간선의 수 최소 -> node-1)
// 사이클 포함 X
// 크루스칼 -> 간선 비용의 최소로 연결 -> 사이클 제외
// 프림? -> 하나씩 확인하면서 최소값을 n-1 번 이으면 됨
// class UnionFind {
//     constructor(size) {
//         // 노드 연결의 기준점 설정 배열 -> 일반적으로 제일 작은 수!
//         this.parent = Array(size).fill().map((_, idx) => idx);
//     }
//
//     // 해당 노드의 최상위 기준점은 어디인지 찾는 함수(재귀로 자신의 것과 일치할때까지 찾음 -> 최상위)
//     find(node) {
//         if (this.parent[node] !== node) {
//             this.parent[node] = this.find(this.parent[node]);
//         }
//         return this.parent[node];
//     }
//
//     // 노드를 합치는 함수!
//     union(node1, node2) {
//         // 합칠 두 노드의 최상위를 찾는다!
//         const root1 = this.find(node1);
//         const root2 = this.find(node2);
//
//         // 최상위 중 더 작은 수를 최상위 배열에 등록!
//         if (root1 < root2) {
//             this.parent[root2] = root1;
//         } else {
//             this.parent[root1] = root2;
//         }
//     }
// }
//
// function solution(n, costs) {
//     costs.sort((a, b) => a[2] - b[2]);
//
//     const unionFind = new UnionFind(n);
//     let minCost = 0;
//     let connectedEdges = 0;
//
//     for (const [node1, node2, cost] of costs) {
//         // 두 노드가 같은 최상위(싸이클)가 아닌 경우에만 합쳐줌!
//         if (unionFind.find(node1) !== unionFind.find(node2)) {
//             unionFind.union(node1, node2);
//             minCost += cost;
//             connectedEdges++;
//
//             // 간선의 수는 최소신장트리에서는 n-1개
//             if (connectedEdges === n - 1) {
//                 break;
//             }
//         }
//     }
//
//     return minCost;
// }

// 프림
function solution(n, costs) {
    const graph = new Map();

    // 그래프 생성
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (const [node1, node2, cost] of costs) {
        graph.get(node1).push({ to: node2, cost });
        graph.get(node2).push({ to: node1, cost });
    }

    const visited = Array(n).fill(false);
    visited[0] = true;

    const priorityQueue = [];
    for (const edge of graph.get(0)) {
        priorityQueue.push({ from: 0, to: edge.to, cost: edge.cost });
    }
    priorityQueue.sort((a, b) => a.cost - b.cost);

    let minCost = 0;
    let connectedNodes = 1;

    while (connectedNodes < n) {
        const { _, to, cost } = priorityQueue.shift();

        if (!visited[to]) {
            visited[to] = true;
            minCost += cost;
            connectedNodes++;

            for (const edge of graph.get(to)) {
                priorityQueue.push({ from: to, to: edge.to, cost: edge.cost });
            }
            priorityQueue.sort((a, b) => a.cost - b.cost);
        }
    }

    return minCost;
}

console.log('---answer--- : ', solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [3, 1, 1], [2, 3, 8]]));




