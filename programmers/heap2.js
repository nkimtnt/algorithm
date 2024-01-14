/**
 * 디스크 컨트롤러
 * https://school.programmers.co.kr/learn/courses/30/lessons/42627
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(job) {
        this.heap.push(job);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.shift();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyUp(index) {
        while (index > 0 && this.compare(this.heap[index], this.heap[this.parent(index)]) < 0) {
            [this.heap[index], this.heap[this.parent(index)]] = [this.heap[this.parent(index)], this.heap[index]];
            index = this.parent(index);
        }
    }

    heapifyDown(index) {
        let left = this.leftChild(index);
        let right = this.rightChild(index);
        let smallest = index;

        if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
            smallest = left;
        }

        if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    compare(a, b) {
        return a[1] - b[1];
    }
}

function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);

    let currentTime = 0;
    let totalWaitingTime = 0;
    let completedJobs = 0;

    const minHeap = new MinHeap();

    while (completedJobs < jobs.length || minHeap.heap.length > 0) {
        while (completedJobs < jobs.length && jobs[completedJobs][0] <= currentTime) {
            minHeap.insert(jobs[completedJobs]);
            completedJobs++;
        }

        if (minHeap.heap.length === 0) {
            currentTime = jobs[completedJobs][0];
        } else {
            const [start, duration] = minHeap.extractMin();
            totalWaitingTime += currentTime - start + duration;
            currentTime += duration;
        }
    }

    return Math.floor(totalWaitingTime / jobs.length);
}

console.log('---answer--- : ', solution([[0, 3], [1, 9], [2, 6]]));


// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }
//
//     static parent(idx) {
//         return Math.floor((idx - 1) / 2);
//     }
//
//     static leftChild(idx) {
//         return 2 * idx + 1;
//     }
//
//     static rightChild(idx) {
//         return 2 * idx + 2;
//     }
//
//     // 현재 입력된 값이 부모보다 작다면 바꿔주는 프로세스(입략)
//     static heapifyUp(heap, idx) {
//         while (idx > 0 && heap[idx].time < heap[this.parent(idx)].time) {
//             [heap[idx], heap[this.parent(idx)]] = [heap[this.parent(idx)], heap[idx]];
//             idx = this.parent(idx);
//         }
//     }
//
//     // 삭제 시 최소값을 삭제하고 맨 마지막 자식을 바꿔주는 프로세스
//     static heapifyDown(heap, idx) {
//         let left = this.leftChild(idx);
//         let right = this.rightChild(idx);
//         let min = idx;
//
//         if (left < heap.length && heap[left].time < heap[min].time) {
//             min = left;
//         }
//
//         if (right < heap.length && heap[right].time < heap[min.time]) {
//             min = right;
//         }
//
//         if (min !== idx) {
//             [heap[idx], heap[min]] = [heap[min], heap[idx]];
//             this.heapifyDown(heap, min);
//         }
//     }
//
//     insert(val) {
//         this.heap.push({ time: val, idx: null, total: null });
//         this.constructor.heapifyUp(this.heap, this.heap.length - 1);
//     }
//
//     delete() {
//         if (!this.heap.length) {
//             return null;
//         }
//
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//
//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.constructor.heapifyDown(this.heap, 0);
//
//         return min;
//     }
// }
//
// function solution(jobs) {
//     let answer = 0;
//
//     // [작업이 요청되는 시점, 작업의 소요시간]
//     // 작업의 소요시간 우선순위 큐(min-heap)를 만들어서 비교
//     // 실제 작업 총량을 구하는건
//
//     // 정보를 기록하는 배열을 하난 만들어서 저장 -> 힙에 같이 저장
//
//     const minHeap = new MinHeap();
//     jobs.forEach(j => {
//         minHeap.insert(j[1]);
//     });
//
//     console.log('minHeap', minHeap);
//
//
//     return answer;
// }