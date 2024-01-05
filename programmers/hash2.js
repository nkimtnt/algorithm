/**
 * 폰켓몬
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 */

function solution(nums) {
    const pickNum = nums.length / 2;
    const poketmonSet = new Set(nums);

    return Array.from(poketmonSet).length >= pickNum ? pickNum : Array.from(poketmonSet).length;
}

solution([3, 1, 2, 3]);

// git test
