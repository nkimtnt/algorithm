/**
 * 체육복
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 */

function solution(n, lost, reserve) {
    let answer = 0;


    // lost 를 순회한다
    // 본인이 있다면을 먼저 체크해야할거같은데!? -> 본인이 존재하면 reserve 삭제
    // reserve 에서 앞 뒤가 있다면 + -> reserve 에서 제거

    // 하지만 지피티 센세는 다르죠?
    // 배열을 따로 지정해서 상태를 나타내고 0(도난), 1(가져옴), 2(여벌)
    // 순회하며 처리

    function solution(n, lost, reserve) {
        // 학생들의 체육복 상태를 나타내는 배열 생성
        let students = Array(n).fill(1);

        // 도난당한 학생들의 체육복 상태를 0으로 설정
        lost.forEach(student => {
            students[student - 1] -= 1;
        });

        // 여벌 체육복을 가진 학생들의 체육복 상태를 2로 설정
        reserve.forEach(student => {
            students[student - 1] += 1;
        });

        // 체육복 빌려주기
        students.forEach((count, index) => {
            if (count === 0) {
                // 도난당한 학생일 때
                if (students[index - 1] === 2) {
                    // 바로 앞의 학생이 여벌 체육복을 가지고 있으면 빌림
                    students[index] += 1;
                    students[index - 1] -= 1;
                } else if (students[index + 1] === 2) {
                    // 바로 뒤의 학생이 여벌 체육복을 가지고 있으면 빌림
                    students[index] += 1;
                    students[index + 1] -= 1;
                }
            }
        });

        // 체육수업을 들을 수 있는 학생 수 계산
        const answer = students.filter(count => count > 0).length;
        return answer;
    }


    return answer;
}

console.log('---answer--- : ', solution(5, [2, 4], [1, 3, 5]));

