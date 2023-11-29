// Space O(logN) and Time O(logN)
function shiftedBinarySearch(arr = [], target) {
  function shiftedBinarySearchHelper(leftIdx, rightIdx) {
    if (leftIdx > rightIdx) {
      return -1;
    }

    let middleIdx = Math.floor((leftIdx + rightIdx) / 2),
    middleNum = arr[middleIdx],
    leftNum = arr[leftIdx],
    rightNum = arr[rightIdx];

    if (target === middleNum) {
      return middleIdx;
    } else if (leftNum <= middleNum) {
      if (target >= leftNum && target < middleNum) {
        return shiftedBinarySearchHelper(leftIdx, middleIdx - 1);
      } else {
        return shiftedBinarySearchHelper(leftIdx + 1, rightIdx);
      }
    } else {
      if (target <= rightNum && target > middleNum) {
        return shiftedBinarySearchHelper(leftIdx + 1, rightIdx);
      } else {
        return shiftedBinarySearchHelper(leftIdx, middleIdx - 1);
      }
    }

  }

  return shiftedBinarySearchHelper(0, arr.length - 1);
}

// Space O(1) and Time O(logN)
function shiftedBinarySearch(arr = [], target) {
  let leftIdx = 0,
    rightIdx = arr.length - 1,
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);

  while (leftIdx <= rightIdx) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    let leftNum = arr[leftIdx],
      rightNum = arr[rightIdx],
      middleNum = arr[middleIdx];

    if (target === middleNum) {
      return middleIdx;
    } else if (leftNum <= middleNum) {
      if (target >= leftNum && target < middleNum) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      if (target <= rightNum && target > middleNum) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
  }

  return -1;
}

console.log(shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 33));
console.log(shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 0));
