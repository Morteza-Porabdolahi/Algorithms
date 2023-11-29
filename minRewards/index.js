// Time O(n^2) and space O(n) n = scores.length
function minRewards(scores) {
  const rewards = Array.from({ length: scores.length }, () => 1);

  for (let i = 1; i < scores.length; i++) {
    let j = i - 1;

    if (scores[i] > scores[j]) {
      rewards[i] = rewards[j] + 1;
    } else {
      while (j >= 0 && scores[j] > scores[j + 1]) {
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j--;
      }
    }
  }

  return rewards.reduce((acc,curr) => acc + curr, 0);
}

// Time O(N) Space O(N) N = scores.length
/* function minRewards(scores) {
  const rewards = Array.from({ length: scores.length }, () => 1),
  localMinIdxs = findLocalMinIdxs();

  function findLocalMinIdxs() {
    if(scores.length === 1) return [0];
    
    const localMinIdxs = [];
    
    for(let i = 0; i < scores.length; i++) {
      if(i === 0 && scores[i] < scores[i + 1]) {
        localMinIdxs.push(i);
      }
      if(i === scores.length - 1 && scores[i] < scores[i - 1]) {
        localMinIdxs.push(i);
      }
      if(i !== 0 || i !== scores.length - 1) {
        if(scores[i] < scores[i - 1] && scores[i] < scores[i + 1]) {
          localMinIdxs.push(i);
        }
      }
    }
    
    return localMinIdxs;
  }

  function expandFromLocalMinIdx(localMinIdx) {
    let leftIdx = localMinIdx - 1;

    while(leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
      rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
      leftIdx--;
    }

    let rightIdx = localMinIdx + 1;

    while(rightIdx < scores.length && scores[rightIdx] > scores[rightIdx - 1]) {
      rewards[rightIdx] = rewards[rightIdx - 1] + 1;
      rightIdx++;
    }
  }

  for(let localMinIdx of localMinIdxs) {
    expandFromLocalMinIdx(localMinIdx);
  }
  
  return rewards.reduce((acc,curr) => acc + curr, 0);
} */

// Time O(N) Space O(N)
/* function minRewards(scores) {
  const rewards = Array.from({ length: scores.length }, () => 1);

  for(let i = 1; i < scores.length; i++) {
    if(scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
    }
  }

  for(let i = scores.length - 2; i >= 0; i--) {
    if(scores[i] > scores[i + 1]) {
      rewards[i] = Math.max(rewards[i + 1] + 1, rewards[i])
    }
  }

  return rewards.reduce((acc,curr) => acc + curr, 0);
} */

console.log(minRewards([8,4,2,1,3,6,7,9,5]))
