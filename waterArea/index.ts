// O(n) time and space
function waterArea(heights: number[]) {
  const maxes: number[] = Array.from({ length: heights.length }, () => 0);
  let leftMax = 0,
    rightMax = 0;

  for (let i = 0; i < heights.length; i++) {
    maxes[i] = leftMax;
    if (heights[i] > leftMax) {
      leftMax = heights[i];
    }
  }

  for (let i = heights.length - 1; i > 0; i--) {
    let minHeight = Math.min(rightMax, maxes[i]);

    if (heights[i] < minHeight) {
      maxes[i] = minHeight - heights[i];
    } else {
      maxes[i] = 0;
    }

    if (heights[i] > rightMax) {
      rightMax = heights[i];
    }
  }

  return maxes.reduce((acc, curr) => acc + curr, 0);
}

console.log(waterArea([0,8,0,0,5,0,0,10,0,0,1,1,0,3]))
