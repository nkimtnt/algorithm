/**
 * 이중 우선순위 큐
 * https://school.programmers.co.kr/learn/courses/30/lessons/42628
 */

// heap o(log n)
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    deleteMax() {
        if (this.heap.length === 0) return;

        if (this.heap.length === 1) {
            this.heap.pop();
            return;
        }

        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown();
    }

    peekMax() {
        return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex] < this.heap[currentIndex]) {
                this.swap(parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let largestChildIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestChildIndex]) {
                largestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestChildIndex]) {
                largestChildIndex = rightChildIndex;
            }

            if (largestChildIndex !== currentIndex) {
                this.swap(currentIndex, largestChildIndex);
                currentIndex = largestChildIndex;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    deleteMin() {
        if (this.heap.length === 0) return;

        if (this.heap.length === 1) {
            this.heap.pop();
            return;
        }

        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown();
    }

    peekMin() {
        return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex] > this.heap[currentIndex]) {
                this.swap(parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== currentIndex) {
                this.swap(currentIndex, smallestChildIndex);
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

function solution(operations) {
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();

    for (const operation of operations) {
        const [cmd, num] = operation.split(' ');
        const number = parseInt(num);

        if (cmd === 'I') {
            maxHeap.insert(number);
            minHeap.insert(number);
        } else if (cmd === 'D' && number === 1) {
            const max = maxHeap.peekMax();
            if (max !== undefined) {
                maxHeap.deleteMax();
                // 최대 힙에서 삭제한 값은 최소 힙에서도 삭제
                const index = minHeap.heap.indexOf(max);
                if (index !== -1) {
                    minHeap.heap.splice(index, 1);
                    minHeap.heapifyDown();
                }
            }
        } else if (cmd === 'D' && number === -1) {
            const min = minHeap.peekMin();
            if (min !== undefined) {
                minHeap.deleteMin();
                // 최소 힙에서 삭제한 값은 최대 힙에서도 삭제
                const index = maxHeap.heap.indexOf(min);
                if (index !== -1) {
                    maxHeap.heap.splice(index, 1);
                    maxHeap.heapifyDown();
                }
            }
        }
    }

    const max = maxHeap.peekMax();
    const min = minHeap.peekMin();

    return (max !== undefined && min !== undefined) ? [max, min] : [0, 0];
}

// 정렬 o(n lon n)
// class sortedQueue {
//     constructor() {
//         this.queue = [];
//     }
//
//     insert(num) {
//         this.queue.push(num);
//         this.queue.sort((a, b) => a - b);
//     }
//
//     deleteMin() {
//         this.queue.shift();
//     }
//
//     deleteMax() {
//         this.queue.pop();
//     }
//
//     result() {
//         if (!this.queue.length) {
//             return [0, 0];
//         } else {
//             return [this.queue[this.queue.length - 1], this.queue[0]];
//         }
//     }
// }
//
// // operations 순회 하면서 min-heap 에 삽입
// // 해당 작업이 어떤 작업인지 판별하는 함수 생성 -> 그냥 안에서 처리
// // heapify -> 정렬에서는 필요 없고 힙 쓰려면 해야함
// // 최솟값 삭제일 경우 휘퓌화이 다시 해줘야 하네
// // 큐.length === 0 이라면 delete 작업은 하지 않기 -> 안해도 어차피 안빠짐
// // 최소 최대 반환
// function solution(operations) {
//     const sq = new sortedQueue();
//
//     for (const operation of operations) {
//         const [task, num] = operation.split(' ');
//         if (task === 'I') {
//             sq.insert(+num);
//         }
//         if (task === 'D' && +num === 1) {
//             sq.deleteMax();
//         }
//         if (task === 'D' && +num === -1) {
//             sq.deleteMin();
//         }
//     }
//
//     return sq.result();
// }

console.log('---answer--- : ', solution(['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333']));
