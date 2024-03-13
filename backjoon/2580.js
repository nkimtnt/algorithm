/**
 * 스도쿠
 * https://www.acmicpc.net/problem/2580
 */

const fs = require('fs');
const stdin = process.platform === 'darwin' ? './example.txt' : '/dev/stdin';
const input = fs.readFileSync(stdin).toString().trim().split('\n').map(s => s.split(' ').map(s => +s));

// 1 가로
// 2 세로?
// 3 네모
// n-queens 랑 비슷하게
// 가로 축을 기준으로 돌리고 유망 판단해서 가능성 있으면 찾는 식?

// 비어 있는 칸의 위치를 찾아서 배열로 반환하는 함수
function findZeros(board) {
    const zeros = [];
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value === 0) zeros.push([x, y]);
        });
    });
    return zeros;
}

// DFS(깊이 우선 탐색)를 사용한 백트래킹 함수
function dfs(zeros, index, board) {
    if (index === zeros.length) {
        console.log(board.map(row => row.join(' ')).join('\n'));
    } else {
        const [x, y] = zeros[index];
        for (let value = 1; value <= 9; value++) {
            if (isSafe(x, y, value, board)) {
                board[y][x] = value;
                dfs(zeros, index + 1, board);
                board[y][x] = 0; // 백트래킹
            }
        }
    }
}

// 특정 칸에 숫자를 놓을 수 있는지 확인하는 함수
function isSafe(x, y, value, board) {
    // 세로줄 검사
    for (let row = 0; row < 9; row++) {
        if (board[row][x] === value) return false;
    }
    // 가로줄 검사
    for (let col = 0; col < 9; col++) {
        if (board[y][col] === value) return false;
    }
    // 3x3 서브그리드 검사
    const startX = Math.floor(x / 3) * 3;
    const startY = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startY + i][startX + j] === value) return false;
        }
    }
    return true;
}

// 메인 코드 실행
const zeros = findZeros(input);
dfs(zeros, 0, input);
