class MinHeap {
  constructor(array) {
    this.heap = array;
    this.heap = this.buildHeap(array);
  }

  // Time O(log(n)) Space O(1)
  insert(value) {
    let newLength = this.heap.push(value);

    this.siftUp(newLength - 1);

    return this;
  }

  // Time O(n) Space O(1)
  buildHeap(array) {
    let currIdx = this.heap.length - 1,
      childOneIdx;

    while (currIdx >= 0) {
      childOneIdx = currIdx * 2 + 1;

      if (array[childOneIdx]) {
        this.siftDown(currIdx);
      }

      currIdx--;
    }

    return array;
  }

  // Time O(log(n)) Space O(1)
  remove() {
    let lastElemIdx = this.heap.length - 1;

    this.swap(0, lastElemIdx);
    let removedValue = this.heap.pop();

    this.siftDown(0);

    return removedValue;
  }

  // Time O(log(n)) Space O(1)
  siftDown(currIdx) {
    let childOneIdx = currIdx * 2 + 1,
      childTwoIdx,
      idxToSwap;

    while (this.heap[childOneIdx]) {
      childTwoIdx = currIdx * 2 + 2;

      if (this.heap[childTwoIdx]) {
        if (this.heap[childOneIdx] < this.heap[childTwoIdx]) {
          idxToSwap = childOneIdx;
        } else {
          idxToSwap = childTwoIdx;
        }

        if (this.heap[currIdx] > this.heap[idxToSwap]) {
          this.swap(currIdx, idxToSwap);

          currIdx = idxToSwap;
          childOneIdx = currIdx * 2 + 1;
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }

  // Time O(log(n)) Space O(1)
  siftUp(currIdx) {
    let parentNodeIdx = Math.floor((currIdx - 1) / 2);

    while (currIdx > 0 && this.heap[currIdx] < this.heap[parentNodeIdx]) {
      this.swap(currIdx, parentNodeIdx);

      currIdx = parentNodeIdx;
      parentNodeIdx = Math.floor((currIdx - 1) / 2);
    }

    return this;
  }

  // Time O(1) Space O(1)
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const minheap = new MinHeap([30, 102, 23, 17, 18, 9, 44, 12, 31]);

console.log(minheap);
