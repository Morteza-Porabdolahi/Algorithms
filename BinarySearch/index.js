// N=array.length | time: O(log(N)) | space=O(log(N)) => because of callStack | Recursively

function binarySearch(array = [], target) {
  function binarySearchHelper(lPointer, rPointer) {
    if (lPointer > rPointer) {
      return -1;
    }

    let middle = Math.floor((lPointer + rPointer) / 2);
    let potentialMatch = array[middle];

    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      return binarySearchHelper(lPointer, middle - 1);
    } else {
      return binarySearchHelper(middle + 1, rPointer);
    }
  }

  return binarySearchHelper(0, array.length - 1);
}

// N=array.length | time: O(log(N)) | space=O(1) | Iteratively

function binarySearch(array = [], target) {
  function binarySearchHelper(lPointer, rPointer) {
    let middle, potentialMatch;

    while (lPointer <= rPointer) {
      middle = Math.floor((lPointer + rPointer) / 2);
      potentialMatch = array[middle];

      if (target === potentialMatch) {
        return middle;
      } else if (target < potentialMatch) {
        rPointer = middle - 1;
      } else {
        lPointer = middle + 1;
      }
    }

    return -1;
  }

  return binarySearchHelper(0, array.length - 1);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));
