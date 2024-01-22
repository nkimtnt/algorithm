/**
 * 최소직사각형
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */

function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    for (const size of sizes) {
        const [w, h] = size;
        maxW = Math.max(maxW, Math.max(w, h));
        maxH = Math.max(maxH, Math.min(w, h));
    }

    return maxW * maxH;
}

console.log('---answer--- : ', solution([[60, 50], [30, 70], [60, 30], [80, 40]]));

