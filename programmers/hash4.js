function solution(clothes) {
    const hashMap = {};

    for (const [, type] of clothes) {
        hashMap[type] = (hashMap[type] || 0) + 1;
    }

    let answer = 1;
    for (const type in hashMap) {
        answer *= hashMap[type] + 1; // 해당하는 타입의 옷을 입지 않는 경우 1 추가
    }

    return answer - 1; // 모든 타입에서 아무것도 입지 않는 경우 1 제거
}
