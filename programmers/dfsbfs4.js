/**
 * 단어변환
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 */

// ???
// 모르겠는데??

// 이해는 했는데...
// 구현 하라고 하면 못하겠는디..
// 혼자서 구현 해보자 한번

function canTransform(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diffCount++;
            if (diffCount > 1) {
                return false;
            }
        }
    }
    return diffCount === 1;
}

function solution(begin, target, words) {
    let queue = [[begin, 0]];
    let visited = new Set();

    while (queue.length > 0) {
        console.log('queue', queue);
        console.log('visited', visited);

        let [word, step] = queue.shift();
        if (word === target) {
            return step;
        }

        for (let w of words) {
            if (!visited.has(w) && canTransform(word, w)) {
                visited.add(w);
                queue.push([w, step + 1]);
            }
        }
    }

    return 0;
}


console.log('---answer--- : ', solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));

