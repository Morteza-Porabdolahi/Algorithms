// time = O(n^2) space = O(n^2)
function getSmallestDifference(arr1 = [], arr2 = []) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let tempArr = [],
      tempDistance = Infinity;

    for (let j = 0; j < arr2.length; j++) {
      let distance = Math.abs(arr2[j] - arr1[i]);

      if (distance < tempDistance) {
        tempDistance = distance;
        tempArr = [arr1[i], arr2[j]];
      }
    }

    if (!answer.length) {
      answer = tempArr;
    } else {
      let distanceBetweenAnswer = Math.abs(answer[0] - answer[1]),
        distanceBetweenTemp = Math.abs(tempArr[0] - tempArr[1]);

      if (distanceBetweenTemp < distanceBetweenAnswer) {
        answer = tempArr;
      }
    }
  }

  return answer;
}

// time = O(nlogn + mlogm) space = O(1)
function getSmallestDifference(arr1 = [], arr2 = []) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    smallest = Infinity,
    current = Infinity,
    smallestPair = [];

  while (i < arr1.length - 1 && j < arr2.length - 1) {
    let firstNum = arr1[i], secondNum = arr2[j];
    
    if (firstNum === secondNum) {
      return [firstNum, secondNum];
    } else if (firstNum < secondNum) {
      current = secondNum - firstNum;
      i++;
    } else {
      current = firstNum - secondNum;
      j++;
    }

    if (current < smallest) {
      smallest = current;
      smallestPair = [arr1[i], arr2[j]];
    }
  }

  return smallestPair;
}
