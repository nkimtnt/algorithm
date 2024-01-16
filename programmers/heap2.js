/**
 * 디스크 컨트롤러
 * https://school.programmers.co.kr/learn/courses/30/lessons/42627
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    static parentIdx(idx) {
        return Math.floor((idx - 1) / 2);
    }

    static leftChildIdx(idx) {
        return 2 * idx + 1;
    }

    static rightChildIdx(idx) {
        return 2 * idx + 2;
    }

    static heapifyUp(heap, idx) {

        if (heap) {

        }


        return idx;
    }

    static heapifyDown(idx) {
        return idx;
    }

    insert(time) {
        this.heap.push(time);
        this.constructor.heapifyUp(this.heap, this.heap.length - 1);
    }


}

// 작업의 요청시간 순으로 jobs 선 정렬이 필요
// min-heap 으로 우선순위 큐 -> 작업의 소요시간이 적은 순으로 정렬
// now 를 기준으로 진행
// heapify 함과 동시에 걸리는 시간을 소요시간을 totalTime 에 등록
// ( 위 )/ jobs.length 해주면 최소 평균 시간
// +@ 만일 time 에 해당하는 작업이 없을 경우 다음 작업의 시작 시간으로 점프?
function solution(jobs) {
    let answer = 0;

    const sortedJobs = jobs.sort((a, b) => {
        return a[0] - b[0];
    });
    const minHeap = new MinHeap();

    sortedJobs.forEach(j => minHeap.insert(j[1]));


    return answer;
}


console.log('---answer--- : ', solution([[0, 3], [1, 9], [2, 6]]));


// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }
//
//     insert(job) {
//         this.heap.push(job);
//         this.heapifyUp(this.heap.length - 1);
//     }
//
//     extractMin() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//
//         if (this.heap.length === 1) {
//             return this.heap.shift();
//         }
//
//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return min;
//     }
//
//     heapifyUp(index) {
//         while (index > 0 && this.compare(this.heap[index], this.heap[this.parent(index)]) < 0) {
//             [this.heap[index], this.heap[this.parent(index)]] = [this.heap[this.parent(index)], this.heap[index]];
//             index = this.parent(index);
//         }
//     }
//
//     heapifyDown(index) {
//         let left = this.leftChild(index);
//         let right = this.rightChild(index);
//         let smallest = index;
//
//         if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
//             smallest = left;
//         }
//
//         if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
//             smallest = right;
//         }
//
//         if (smallest !== index) {
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             this.heapifyDown(smallest);
//         }
//     }
//
//     parent(index) {
//         return Math.floor((index - 1) / 2);
//     }
//
//     leftChild(index) {
//         return 2 * index + 1;
//     }
//
//     rightChild(index) {
//         return 2 * index + 2;
//     }
//
//     compare(a, b) {
//         return a[1] - b[1];
//     }
// }
//
// function solution(jobs) {
//     jobs.sort((a, b) => a[0] - b[0]);
//
//     let currentTime = 0;
//     let totalWaitingTime = 0;
//     let completedJobs = 0;
//
//     const minHeap = new MinHeap();
//
//     while (completedJobs < jobs.length || minHeap.heap.length > 0) {
//         while (completedJobs < jobs.length && jobs[completedJobs][0] <= currentTime) {
//             minHeap.insert(jobs[completedJobs]);
//             completedJobs++;
//         }
//
//         if (minHeap.heap.length === 0) {
//             currentTime = jobs[completedJobs][0];
//         } else {
//             const [start, duration] = minHeap.extractMin();
//             totalWaitingTime += currentTime - start + duration;
//             currentTime += duration;
//         }
//     }
//
//     return Math.floor(totalWaitingTime / jobs.length);
// }
//
// console.log('---answer--- : ', solution([[0, 3], [1, 9], [2, 6]]));
//
