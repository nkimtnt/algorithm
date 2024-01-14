/**
 * 주식 가격
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 */

// stack o(n)
function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i);
    }
    
    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}

console.log('---answer--- : ', solution([3, 1, 4, 2, 5]));

// 이중 루프 - o(n2)
// function solution(prices) {
//     const answer = [];

//     for (let i = 0; i < prices.length; i++) {
//         let duration = 0;

//         for (let j = i + 1; j < prices.length; j++) {
//             console.log('duration', duration);
//             console.log('i', prices[i]);
//             console.log('j', prices[j]);
//             if (prices[i] <= prices[j]) {
//                 duration++;
//             } else {
//                 duration++;
//                 break;
//             }
//         }

//         answer.push(duration);
//     }

//     return answer;
// }
