// Time O(N^2) Space O(N)
function minNumberOfJumps(steps = []) {
  const jumps = Array.from({ length: steps.length }, (_, i) => i === 0 ? 0 : Infinity);

  for (let i = 0; i < steps.length; i++) {
    for (let j = 0; j < i; j++) {
      if (steps[j] + j >= i) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
      }
    }
  }

  return jumps.at(-1);
}

// Time O(N) Space O(1)
function minNumberOfJumps(array = []) {
  let jumps = 0,
    steps = array[0],
    maxReach = array[0];

  for (let i = 1; i < array.length; i++) {
    if (i === array.length - 1) return jumps + 1;

    maxReach = Math.max(maxReach, array[i] + i);
    steps--;

    if (steps === 0) {
      jumps += 1;
      steps = maxReach - i;
    }
  }
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
