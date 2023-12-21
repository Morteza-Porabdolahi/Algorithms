function searchForRange(sortedArr, target) {
  const range = [-1, -1];
  
  alteredBinarySearch(false);
  alteredBinarySearch(true);

  function alteredBinarySearch(goRight) {
    let leftPointer = 0,
      rightPointer = sortedArr.length - 1,
      middlePointer = Math.floor((rightPointer + leftPointer) / 2)

    while (leftPointer <= rightPointer) {
      middlePointer = Math.floor((rightPointer + leftPointer) / 2)

      if (sortedArr[middlePointer] === target) {
        if (goRight) {
          if (middlePointer === sortedArr.length - 1 || sortedArr[middlePointer + 1] !== target) {
            range[1] = middlePointer;
            return;
          } else {
            leftPointer = middlePointer + 1;
          }
        } else {
          if (middlePointer === 0 || sortedArr[middlePointer - 1] !== target) {
            range[0] = middlePointer;
            return;
          } else {
            rightPointer = middlePointer - 1;
          }
        }
      } else if (sortedArr[middlePointer] > target) {
        rightPointer = middlePointer - 1;
      } else {
        leftPointer = middlePointer + 1;
      }
    }
  }

  return range;
}

console.log(searchForRange('0 1 21 33 45 45 45 45 45 45 61 71 73'.split(' ').map(Number), 45))
