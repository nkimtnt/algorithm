/**
 * 같은 숫자는 싫어
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */

function solution(arr) {
    const newArr = [];

    arr.forEach((num, idx) => {
        if (idx === 0 || (idx > 0 && arr[idx - 1] !== num)) newArr.push(num);
    });

    return newArr;
}

console.log('---answer--- : ', solution([1, 1, 3, 3, 0, 1, 1]));
