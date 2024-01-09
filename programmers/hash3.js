/**
 * 전화번호 목록
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 */

// sort - O(nlogn)
// function solution(phone_book) {
//     phone_book.sort();

//     for (let i = 0; i < phone_book.length - 1; i++) {
//         if (phone_book[i + 1].startsWith(phone_book[i])) {
//             return false;
//         }
//     }

//     return true;
// }

// hash - O(n2)
function solution(phone_book) {
    const hashMap = {};

    for (const phoneNumber of phone_book) {
        hashMap[phoneNumber] = true;
    }

    for (const phoneNumber of phone_book) {
        for (let i = 1; i < phoneNumber.length; i++) {
            const prefix = phoneNumber.slice(0, i);
            console.log('prefix', prefix);

            if (hashMap[prefix]) {
                return false;
            }
        }
    }

    return true;
}

solution(['567', '88', '12', '123', '1235']);
