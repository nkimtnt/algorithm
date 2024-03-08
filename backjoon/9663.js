/**
 * N-queen
 * https://www.acmicpc.net/problem/9663
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const N = fs.readFileSync(stdin).toString().trim();

// 재귀적으로 노드 탐색
// 프로미싱하다면 탈출조건?

const aaa = (N) => {
    const visited = new Array(N).fill(0);
    let answer = 0;

    const isPromise = (x) => {
        for (let i = 0; i < x; i++) {
            if (visited[x] === visited[i]) {
                return false;
            }
            if (Math.abs(visited[x] - visited[i]) === x - i) {
                return false;
            }
        }

        return true;
    };

    const dfs = (x) => {
        if (x === N) {
            answer++;
        } else {
            for (let i = 0; i < N; i++) {
                if (visited[x]) {
                    continue;
                }
                visited[x] = i;

                if (isPromise(x)) {
                    dfs(x + 1);
                }
                visited[x] = 0;
            }
        }
    };

    dfs(0);
    return answer;
};

console.log(aaa(+N));
