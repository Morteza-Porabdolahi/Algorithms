// O(N) space and O(NlogN) time (could be O(1) space)
function largestRange(array: number[]) {
  array.sort((a, b) => a - b);

  let currentRange: number[] = [],
    maxRange: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0) currentRange.push(array[i]);

    if (array[i] - 1 === array[i - 1]) {
      currentRange.push(array[i]);
    } else {
      if (maxRange.length < currentRange.length) {
        maxRange = currentRange;
        currentRange = [array[i]];
      }
    }
  }

  return [maxRange[0], maxRange[maxRange.length - 1]];
}

// O(N) space and O(N) time
function largestRange2(array: number[]) {
  let numbers = {},
    currRange: number[] = [],
    maxRange = [0, 0];

  // false means it's not included in any ranges
  for (let num of array) {
    numbers[num] = false;
  }

  for (let num of array) {
    if (numbers[num]) continue;

    let currNum = num;

    numbers[currNum] = true;

    while (currNum - 1 in numbers) {
      currNum = currNum - 1;
      numbers[currNum] = true;
    }

    currRange.push(currNum);
    currNum = num;

    while (currNum + 1 in numbers) {
      currNum = currNum + 1;
      numbers[currNum] = true;
    }

    currRange.push(currNum);


    if (maxRange[1] - maxRange[0] < currRange[1] - currRange[0]) {
      maxRange = currRange;
      currRange = [];
    }
  }
  
  return maxRange;
}

console.log(
  largestRange2("0 1 2 3 4 5 6 7 10 11 12 15".split(" ").map(Number))
)
