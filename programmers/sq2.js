/**
 * 기능 개발
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

// function solution(progresses, speeds) {
//     const answer = [];
//     const dayArr = progresses.map((num, idx) => Math.ceil((100 - num) / speeds[idx]));

//     console.log('dayArr', dayArr);

//     let maxDay = dayArr[0];
//     let sum = 1;

//     for (let i = 0; i < dayArr.length; i++) {
//         console.log('maxDay', maxDay);

//         if (dayArr[i] < maxDay) {
//             answer.push(sum);
//             maxDay = dayArr[i + 1];
//             sum = 1;
//         } else {
//             sum++;
//         }
//     }

//     return answer;
// }

function solution(progresses, speeds) {
    const answer = [];
    const dayArr = progresses.map((num, idx) => Math.ceil((100 - num) / speeds[idx]));

    console.log('dayArr', dayArr);

    let maxDay = dayArr[0];
    let sum = 1;

    for (let i = 1; i < dayArr.length; i++) {
        if (dayArr[i] <= maxDay) {
            sum++;
        } else {
            answer.push(sum);
            maxDay = dayArr[i];
            sum = 1;
        }
    }

    answer.push(sum); // 마지막 그룹의 개수를 추가

    return answer;
}

console.log('---answer--- : ', solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
