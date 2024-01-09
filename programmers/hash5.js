/**
 * 베스트 앨범
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 */

// 해시 -> 장르 - 값 - 객체 - (배열)
// 합계는 hash 완성 후에 밸류 합으로 구하고
// 순서는 sort? hash? -> 같을 경우 순회해서 고유번호 작은 아이로 해야 하니까 hash
// 2개 까지만 저장하면 되고
// 하나만 있는 경우는 하나만 등록

function solution(genres, plays) {
    const mapInfo = new Map();

    // hash 입력 - 객체로 정보 저장
    genres.forEach((item, idx) => {
        if (mapInfo.has(item)) {
            const itemValue = mapInfo.get(item);

            itemValue.playsInfo.push({ idx, value: plays[idx] });

            mapInfo.set(item, {
                genres: item,
                playsInfo: itemValue.playsInfo,
                sum: itemValue.sum + plays[idx],
            });
        } else {
            mapInfo.set(item, { genres: item, playsInfo: [{ idx, value: plays[idx] }], sum: plays[idx] });
        }
    });

    // 장르별 합계 순서 정렬
    const sortedMapInfo = Array.from(mapInfo)
        .sort((a, b) => b[1].sum - a[1].sum)
        .map((arr) => arr[1]); // value 만 가져오기(arr)

    // 개별 곡의 플레이 횟수가 큰 순 - 같을 시에 인덱스 큰 아이로
    // 2개까지만 정렬
    const resultArr = [];

    sortedMapInfo.forEach((o) => {
        const sortedArray = o.playsInfo
            .sort((a, b) => {
                // value가 큰 순서대로 정렬
                if (b.value === a.value) {
                    // value가 동일할 경우 idx가 작은 순서대로 정렬
                    return a.idx - b.idx;
                } else {
                    return b.value - a.value;
                }
            })
            .slice(0, 2);

        sortedArray.forEach((o) => resultArr.push(o.idx));
    });

    return resultArr;
}

// function solution(genres, plays) {
//     var tempObj = {};
//     genres.forEach((total, i) => {
//         tempObj[total] = tempObj[total] ? tempObj[total] + plays[i] : plays[i];
//     });

//     var dupDic = {};

//     const a = genres
//         .map((t, i) => ({ genre: t, count: plays[i], index: i }))
//         .sort((a, b) => {
//             if (a.genre !== b.genre) return tempObj[b.genre] - tempObj[a.genre];
//             if (a.count !== b.count) return b.count - a.count;
//             return a.index - b.index;
//         })
//         .filter((t) => {
//             if (dupDic[t.genre] >= 2) return false;
//             dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
//             return true;
//         })
//         .map((t) => t.index);

//     return a;
// }

solution(['classic', 'classic', 'classic', 'classic', 'pop', 'jazz'], [500, 500, 150, 800, 2500, 100]);
