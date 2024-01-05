function solution(nums) {
    const pickNum = nums.length / 2;
    const poketmonSet = new Set(nums);

    return Array.from(poketmonSet).length >= pickNum ? pickNum : Array.from(poketmonSet).length;
}

solution([3, 1, 2, 3]);
