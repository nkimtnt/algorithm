/**
 * 카펫
 * https://school.programmers.co.kr/learn/courses/30/lessons/86971
 */

function solution(n, wires) {
    let answer = -1;

    // 2차원 배열 이고 sort 가 되어 있는지 아닌지는 모르겠지만
    // 모두 더한 다음에 -> 제일 많이 나온 수 2개가 엮어져 있는 배열을 찾아서 삭제
    // 해당 인덱스를 기점으로 좌 우 렝스 살펴보고 차를 리턴
    let tree = Array.from(Array(n + 1), () => []);

    wires.map((element) => {
        let [a, b] = element;

        tree[a].push(b);
        tree[b].push(a);
    });

    console.log('tree', tree);

    return answer;
}

console.log('---answer--- : ', solution(10, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]));

