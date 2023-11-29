// Time O(n^2) and Space O(n) which n = disks.length
function diskStacking(disks = []) {
  disks.sort((a, b) => a[2] - b[2]);

  let heights = Array.from({ length: disks.length }, (_, i) => disks[i][2]),
  sequences = Array.from({ length: disks.length }),
  maxHeightIdx = 0;

  for (let i = 1; i < disks.length; i++) {
    let currentDisk = disks[i];

    for (let j = 0; j < i; j++) {
      let otherDisk = disks[j];

      if (areDimensionsValid(otherDisk, currentDisk)) {
        if(heights[i] < heights[j] + currentDisk[2]) {
          heights[i] = heights[j] + currentDisk[2];
          sequences[i] = j;
        }
      }
    }
    
    if(heights[i] >= heights[maxHeightIdx]) {
      maxHeightIdx = i; 
    }
  }

  function areDimensionsValid(otherDisk, currentDisk) {
    return otherDisk[0] < currentDisk[0] && otherDisk[1] < currentDisk[1] && otherDisk[2] < currentDisk[2];
  }

  function buildSequences() {
    let currentIdx = maxHeightIdx,
    stack = [];

    while(currentIdx) {
      stack.push(disks[currentIdx]);
      // IT IS REALLY COOL THOUGH! :D
      currentIdx = sequences[currentIdx];
    }

    return stack.reverse();
  }

  return buildSequences();
}

console.log(diskStacking('212 221 323 234 445 228'.split(' ').map(item => item.split('').map(str => +str))))
