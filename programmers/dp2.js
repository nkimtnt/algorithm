/**
 * 등굣길
 * https://school.programmers.co.kr/learn/courses/30/lessons/42898
 */

// 느낌상 bottom-up 거꾸로 하나씩 뒤집어서 쌓아 올려야 할거같은데? -> 아니다! bfs 로 하면 위에서부터 ㅇ_ㅇ?
function solution(m, n, puddles) {
    const mod = 1000000007;
    // 가로 세로를 어떻게 설정할 것인지 중요
    // gpt 는 반대로 설정해줘서 짱낫음
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    // 집 위치 초기화
    dp[1][1] = 1;

    // 물 웅덩이 위치 초기화
    for (const [x, y] of puddles) {
        dp[y][x] = -1;
    }

    // DP를 통한 최단경로 개수 계산
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (dp[i][j] === -1) {
                // 물 웅덩이인 경우 해당 위치의 최단경로 개수를 0으로 설정
                // 우 하 로만 움직이니까 경로 더해지는 값이 없음
                dp[i][j] = 0;
            } else {
                // 오른과 아래의 값을 더해 최단경로 개수 계산
                // 더해줄때는 %= mod 없어도 테스트는 통과
                // 하지만 실제로 더 큰 수가 들어올 경우 실패할듯?
                if (i > 1) dp[i][j] += dp[i - 1][j] % mod;
                if (j > 1) dp[i][j] += dp[i][j - 1] % mod;

                // 여기서는 안해주면 테스트 실패
                // 아마 합해져서 2^31-1 넘어갔을듯??
                dp[i][j] %= mod;
            }
        }
    }

    // 학교까지의 최단경로 개수 반환
    // n / m 을 어떻게 설정할지 -> 가로 / 세로
    // 여기서도 %= mod 빼줘도 테스트는 통과
    // 미리 이미 나눠줘서 마지막은 안해줘도 무리 없는듯?
    return dp[n][m] % mod;
}

console.log('---answer--- : ', solution(4, 3, [[2, 2]]));

