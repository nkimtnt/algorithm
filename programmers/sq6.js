/**
 * 주식 가격
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 */

function solution(prices) {
    const answer = [];

    // 연속했을 경우에만 카운트를 올려야 함
    // 음 생각을 조금 해봐야겠다!

    prices.forEach((p, idx) => {
        const sliceP = prices.slice(idx + 1);
        let num = 0;
        console.log('sliceP', sliceP);

        sliceP.forEach((sP) => {
            if (p >= sP) {
                console.log('p', p);
                console.log('sP', sP);
                num += 1;
                console.log('num', num);
            }
        });

        answer.push(num);
    });

    return answer;
}

// stack o(n)
function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            console.log('stack', stack);

            const top = stack.pop();
            console.log('top', top);

            answer[top] = i - top;
            console.log('answer[top]', answer[top]);
        }
        console.log('before-stack', stack);

        stack.push(i);
        console.log('after-stack', stack);
    }

    console.log('final-stack', stack);
    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}

console.log('---answer--- : ', solution([1, 2, 3, 2, 3]));

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
