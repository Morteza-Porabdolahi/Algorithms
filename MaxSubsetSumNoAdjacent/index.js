// time=O(n) n=array.length and space=O(1)
const maxSubsetSumNoAdjacentOpt = (array = []) => {
  if (!array.length) {
    return;
  } else if (array.length === 1) {
    return array[0];
  }

  let firstMax = Math.max(array[0], array[1]),
    secondMax = array[0];

  for (let i = 2; i < array.length; i++) {
    let currentMax = Math.max(firstMax, array[i] + secondMax);

    secondMax = firstMax;
    firstMax = currentMax;
  }

  return firstMax;
};

// time=O(n) n=array.length and space=O(n)
const maxSubsetSumNoAdjacent = (array = []) => {
  if (!array.length) {
    return;
  } else if (array.length === 1) {
    return array[0];
  }

  let maxsArr = [array[0], Math.max(array[0], array[1])];

  for (let i = 2; i < array.length; i++) {
    let currentMax = Math.max(maxsArr[i - 1], array[i] + maxsArr[i - 2]);

    maxsArr.push(currentMax);
  }

  return maxsArr.at(-1);
};
