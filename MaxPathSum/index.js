// O(N) time and O(log(N)) space
function maxPathSum(tree) {
  function maxPathSumHelper(tree) {
    if(tree === null) return [0, 0];

    const [leftMaxSumAsBranch, leftMaxPathSum] = maxPathSumHelper(tree.left);
    const [rightMaxSumAsBranch, rightMaxPathSum] = maxPathSumHelper(tree.right);

    // this could be a negative value
    const maxChildSumAsBranch = Math.max(rightMaxSumAsBranch, leftMaxSumAsBranch),
    value = tree.value,
    maxSumAsBranch = Math.max(value, maxChildSumAsBranch + value),
    maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch),
    maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);

    return [maxSumAsBranch, maxPathSum];
  }

  return maxPathSumHelper(tree)[1];
}
