/**
 * 카펫
 * https://school.programmers.co.kr/learn/courses/30/lessons/86971
 */

function solution(n, wires) {
    let answer = 101;
    let tree = Array.from(Array(n + 1), () => []);

    // 각 노드들의 연결을 표현한 그래프 생성
    wires.map((element) => {
        let [a, b] = element;

        tree[a].push(b);
        tree[b].push(a);
    });

    function searchTree(root, exceptNum) {
        let count = 0;
        let visit = [];
        let queue = [root];
        visit[root] = true;
        // 큐에 넣고 돌릴건데 큐가 의미하는 건 해당 노드에 대한 방문 여부 및 하위 노드 방문(큐)
        while (queue.length) {
            // 해당 노드 차례니 큐에서 제거
            let index = queue.pop();

            // 해당 큐에 연결된 노드들 탐색 및 방문여부 체크
            tree[index].forEach((element) => {
                if (element !== exceptNum && !visit[element]) {
                    // 제외 하는 아이 아니면서 방문 안했으면 큐에 넣기
                    visit[element] = true;
                    queue.push(element);
                }
            });
            
            // 숫자는 세어 줘야지(큐에 존재하는 노드들이 없어도 자기 자신 방문이니까!)
            count++;
        }

        return count;
    }

    // a-b, b-a 체크해서 차이를 answer 에 넣어줄거임
    wires.forEach(element => {
        let [a, b] = element;

        // 이것 때문에 answer 에 최대값을 넣어줘야하는데 n 보다는 작을테니 n+1 로 넣어줌
        answer = Math.min(answer, Math.abs(searchTree(a, b) - searchTree(b, a)));
    });

    return answer;
}


console.log('---answer--- : ', solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]));

