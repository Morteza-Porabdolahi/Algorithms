// Time O(NlogN) and Space O(N)
function heapSort(array = []) {
  function buildMinHeap() {
    let currIdx = array.length - 1,
      childOneIdx = Math.floor(currIdx * 2 + 1);

    while (currIdx >= 0) {
      if (array[childOneIdx] != null) {
        siftDown(currIdx);
      }

      currIdx--;
      childOneIdx = Math.floor(currIdx * 2 + 1);
    }
  }

  function siftDown(currIdx) {
    let childOneIdx = currIdx * 2 + 1;

    while (array[childOneIdx] != null) {
      let childTwoIdx = currIdx * 2 + 2;

      if (array[childTwoIdx] != null) {
        let idxToSwap;

        if (array[childOneIdx] < array[childTwoIdx]) {
          idxToSwap = childOneIdx;
        } else {
          idxToSwap = childTwoIdx;
        }

        if (array[idxToSwap] < array[currIdx]) {
          swap(currIdx, idxToSwap);

          currIdx = idxToSwap;
          childOneIdx = Math.floor(currIdx * 2 + 1)
        } else {
          break;
        }
      } else {
        // I'm not sure about that
        if (array[currIdx] > array[childOneIdx]) {
          swap(currIdx, childOneIdx);
        }
        break;
      }
    }
  }

  function swap(idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }

  function remove() {
    let removedNode = array[0],
      replacedElement = array.pop();

    if (array.length > 0) {
      array[0] = replacedElement;
      siftDown(0);
    }

    return removedNode;
  }

  buildMinHeap();

  let sortedArray = [];

  while (array.length > 0) {
    sortedArray.push(remove());
  }

  return sortedArray;
}

// Time O(NlogN) and Space O(N)
function heapSort(array = []) {
  function buildMaxHeap() {
    let currIdx = array.length - 1,
      childOneIdx = Math.floor(currIdx * 2 + 1);

    while (currIdx >= 0) {
      if (array[childOneIdx] != null) {
        siftDown(currIdx, array.length - 1);
      }

      currIdx--;
      childOneIdx = Math.floor(currIdx * 2 + 1);
    }
  }

  function siftDown(currIdx, endIdx) {
    let childOneIdx = currIdx * 2 + 1;

    while (childOneIdx <= endIdx) {
      let childTwoIdx = currIdx * 2 + 2;
      childTwoIdx = childTwoIdx > endIdx ? -1 : childTwoIdx;

      let idxToSwap;

      if (childTwoIdx > -1 && array[childOneIdx] < array[childTwoIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (array[idxToSwap] > array[currIdx]) {
        swap(currIdx, idxToSwap);

        currIdx = idxToSwap;
        childOneIdx = Math.floor(currIdx * 2 + 1)
      } else {
        break;
      }
    }
  }

  function swap(idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }

  buildMaxHeap();

  let endIdx = array.length - 1;

  while (endIdx > 0) {
    swap(0, endIdx);
    siftDown(0, --endIdx);
  }

  return array;
}

console.log(heapSort([10, 0, 2, 5, -2, 1, 90, 40, 30, 22, 33, 40]))

