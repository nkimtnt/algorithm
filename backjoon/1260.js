const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().trim().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);

let graph = new Array(n + 1);

for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
}

for (let i = 0; i < m; i++) {
    let [from, to] = input[i + 1].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

graph.forEach((e) => {
    e.sort((a, b) => a - b);
});

let visited = new Array(n + 1).fill(0);
let answer_dfs = [];

//DFS

function DFS(v) {
    if (visited[v]) {
        return;
    }
    visited[v] = 1;
    answer_dfs.push(v);
    for (let i = 0; i < graph[v].length; i++) {
        let next = graph[v][i];
        if (visited[next] === 0) {
            DFS(next);
        }
    }
}

DFS(v);
console.log('anser_dfs', answer_dfs.join(' '));

console.log('n', n);
console.log('m', m);
console.log('v', v);
