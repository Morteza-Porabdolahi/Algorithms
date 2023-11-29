// time = O(coins * target) space = O(target)
function minNumberOfCoinsForChange(coins = [], target) {
  const smallerCoins = Array.from({ length: target + 1 }, () => Infinity);

  smallerCoins[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < smallerCoins.length; j++) {
      if (coins[i] <= j) {
        smallerCoins[j] = Math.min(
          smallerCoins[j],
          1 + smallerCoins[j - coins[i]],
        );
      }
    }
  }

  return smallerCoins[target] !== Infinity ? smallerCoins[target] : -1;
}
