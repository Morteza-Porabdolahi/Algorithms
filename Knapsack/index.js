// T = O(NC) and Space = O(NC) which N = items.length, C = capacity
function knapsack(items = [], capacity) {
  let values = Array.from({ length: items.length + 1 }, (_, i) => i === 0 ? Array.from({ length: capacity + 1 }, () => 0) : []);

  for (let i = 1; i < values.length; i++) {
    const [itemValue, itemWeight] = items[i - 1];

    for (let j = 0; j < capacity + 1; j++) {
      if (itemWeight <= j) {
        values[i][j] = Math.max(values[i - 1][j], values[i - 1][j - itemWeight] + itemValue);
      } else {
        values[i][j] = values[i - 1][j];
      }
    }
  }

  function getKnapsackItems() {
    let bag = [],
      i = values.length - 1,
      j = values[0].length - 1;

    while (i > 0) {
      if (values[i][j] !== values[i - 1][j]) {
        bag.push(i - 1);
        j -= items[i - 1][1];
      }

      i--;

      if (j === 0) {
        break;
      }
    }

    return bag;
  }

  return [values.at(-1).at(-1), ...getKnapsackItems()]
}

console.log(
  knapsack([[1, 2], [4, 3], [5, 6], [6, 7]], 10)
)

