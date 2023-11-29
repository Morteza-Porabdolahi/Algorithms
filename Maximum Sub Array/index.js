// space = O(1) && time = O(N)
function getMaxSubArraySum(array = []) {
  let maxUntilCurrIndex = array[0],
    maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    maxUntilCurrIndex = Math.max(maxUntilCurrIndex + array[i], array[i]);
    maxSoFar = Math.max(maxSoFar, maxUntilCurrIndex);
  }

  return maxSoFar;
}

function getMaxSubArray(array = []) {
  let maxUntilCurrIndex = array[0],
    maxSoFar = array[0],
    maxSoFars = [maxSoFar],
    firstIndex = null;

  for (let i = 1; i < array.length; i++) {
    // not sure
    if (array[i] > maxUntilCurrIndex + array[i]) {
      firstIndex = i;
    }
    
    maxUntilCurrIndex = Math.max(maxUntilCurrIndex + array[i], array[i]);
    maxSoFar = Math.max(maxSoFar, maxUntilCurrIndex);

    maxSoFars.push(maxSoFar);
  }
  
  return array.slice(firstIndex, maxSoFars.findIndex(item => item === maxSoFar) + 1);
}

function getMinSubArraySum(array = []) {
  let minUntilCrrIndex = array[0],
    minSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    minUntilCrrIndex = Math.min(minUntilCrrIndex + array[i], array[i]);
    minSoFar = Math.min(minSoFar, minUntilCrrIndex);
  }

  return minSoFar;
}

console.log(
getMaxSubArray([-1, -2, -3])
)
