/**
 * 더 맵게
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    static parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    static leftChild(idx) {
        return 2 * idx + 1;
    }

    static rightChild(idx) {
        return 2 * idx + 2;
    }

    // 현재 입력된 값이 부모보다 작다면 바꿔주는 프로세스(입략)
    static heapifyUp(heap, idx) {
        while (idx > 0 && heap[idx] < heap[this.parent(idx)]) {
            [heap[idx], heap[this.parent(idx)]] = [heap[this.parent(idx)], heap[idx]];
            idx = this.parent(idx);
        }
    }

    // 삭제 시 최소값을 삭제하고 맨 마지막 자식을 바꿔주는 프로세스
    static heapifyDown(heap, idx) {
        let left = this.leftChild(idx);
        let right = this.rightChild(idx);
        let min = idx;

        if (left < heap.length && heap[left] < heap[min]) {
            min = left;
        }

        if (right < heap.length && heap[right] < heap[min]) {
            min = right;
        }

        if (min !== idx) {
            [heap[idx], heap[min]] = [heap[min], heap[idx]];
            this.heapifyDown(heap, min);
        }
    }

    insert(val) {
        this.heap.push(val);
        this.constructor.heapifyUp(this.heap, this.heap.length - 1);
    }

    delete() {
        if (!this.heap.length) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.constructor.heapifyDown(this.heap, 0);

        return min;
    }
}

function solution(scoville, K) {
    let answer = 0;
    const minHeap = new MinHeap();

    // 초기에 scoville을 최소 힙으로 변환
    for (let i = 0; i < scoville.length; i++) {
        minHeap.insert(scoville[i]);
    }

    while (minHeap.heap.length > 1 && minHeap.heap[0] < K) {
        const newFood = minHeap.delete() + minHeap.delete() * 2;
        minHeap.insert(newFood);
        answer++;
    }

    // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
    if (minHeap.heap.length === 1 && minHeap.heap[0] < K) {
        return -1;
    }

    return answer;
}

console.log('---answer--- : ', solution([1, 2, 3, 9, 10, 12], 7));