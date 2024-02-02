/**
 * 정수 삼각형
 * https://school.programmers.co.kr/learn/courses/30/lessons/43105
 */

// function solution(triangle) {
//     let answer = 0;
//     // triangle.length 만큼의 배열 생성 -> 각 연산의 합
//     // 두번째부터 배열의 모든 요소를 다 더해보고 최대만 저장
//     // 0번째와 마지막은 마지막 숫자만 더할 수 있고
//     // 그 나머지는 그 이전 뎁스의 i // i-1 을 더해서 만들 수 있다! 비교해서 저장
//     // okok
//
//     const info = [];
//     console.log('info', info);
//
//
//     triangle.forEach((d, dIxd) => {
//         const temp = [];
//
//         d.forEach((num, numIdx) => {
//             if (dIxd === 0) {
//                 info.push(triangle[0]);
//             }
//             // 처음
//             if (numIdx === 0 && dIxd > 0) {
//                 temp.push(triangle[dIxd - 1][0] + num);
//             }
//             // 중간
//             if (numIdx > 0 && numIdx < num.length - 1) {
//                 temp.push(Math.max(triangle[dIxd - 1][numIdx - 1], triangle[dIxd - 1][numIdx]) + num);
//             }
//             // 마지막
//             if (numIdx > 0 && numIdx === num.length - 1) {
//                 temp.push(triangle[dIxd - 1][d.length - 1] + num);
//             }
//
//             console.log('temp', temp);
//         });
//
//         info.push(temp);
//     });
//
//     console.log('info', info);
//     // console.log(Math.min(...info[info.length - 1]));
//     return answer;
// }

// 이것이 DP 의 bottom-up 방식이다 이것아!
function solution(triangle) {
    // 랭스-1 이 마지막 줄이니까 그 전줄부터 갈아치울 준비
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            // 그냥 바로 갈아치워버렷
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    return triangle[0][0];
}

console.log('---answer--- : ', solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));

