/**
 * 구명보트
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

// 오답 - 이게 베스트가 아니다!
// function solution(people, limit) {
//     let answer = 0;
//
//     // count 필요
//     // 정렬해서 작은것들 부터 합쳐서 내보내는게 이득?
//     // 재귀로 작은 것들 limit 전까지 다 더해서 쳐내고
//     // 피플 줄여주고 없어질때까지 반복 ㅇㅋ?
//     const sortedArr = people.sort((a, b) => a - b);
//
//     // 돌면서 리밑 전까지 더해 -> 그리고 빼
//     while (sortedArr.length > 0) {
//         let tempSum = 0;
//
//         for (let i = 0; i < sortedArr.length; i++) {
//             if (sortedArr.length === 1) {
//                 sortedArr.pop();
//                 answer++;
//                 break;
//             }
//             // 더한 값이 크면 해당 인덱스 전까지 자르기
//             if (tempSum + sortedArr[i] > limit) {
//                 sortedArr.splice(0, i);
//                 answer++;
//                 break;
//             } else {
//                 tempSum += sortedArr[i];
//             }
//         }
//     }
//
//     return answer;
// }

function solution(people, limit) {
    // 사람들의 몸무게를 내림차순으로 정렬
    people.sort((a, b) => a - b);

    let answer = 0;
    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        // 가장 무거운 사람과 가장 가벼운 사람을 함께 태울 수 있으면 함께 태우고, 아니면 가장 무거운 사람만 태움
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        answer++;
    }

    return answer;
}

console.log('---answer--- : ', solution([70, 50, 80, 50], 100));
