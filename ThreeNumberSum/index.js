// time = (N^2) space = O(N)
function threeNumberSum(numbers = [], sum) {
  numbers.sort((a, b) => a - b);

  let triplets = [],
    j, k, length = numbers.length, currentSum;

  for (let i = 0; i < length - 2; i++) {
    j = i + 1;
    k = length - 1;

    while (j < k) {
      currentSum = numbers[i] + numbers[j] + numbers[k];

      if (currentSum === sum) {
        triplets.push([numbers[i], numbers[j], numbers[k]]);
        j++;
        k--;
      } else if (currentSum < sum) {
        j++;
      } else {
        k--;
      }
    }
  }

  return triplets;
}
