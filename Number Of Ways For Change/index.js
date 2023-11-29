// time = O(n*d)  space = O(n)
function numberOfWaysForChange(coins = [],target) {
  const ways = Array.from({length: target + 1}, (_,i) => i === 0 ? 1 : 0);

  for(let i = 0; i < coins.length; i++) {
    if(coins[i] <= target) {
      for(let amount = 1; j < ways.length; j++) {
        if(coins[i] <= amount) {
          ways[j] += ways[amount - coins[i]];
        }
      }
    }
  }

  return ways[target];
}

console.log(
  
numberOfWaysForChange([1,2,5],5)
)
