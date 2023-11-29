class BinaryTree {
  constructor(value, left, right) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

const newTree = new BinaryTree(
  1,
  new BinaryTree(2, new BinaryTree(4), new BinaryTree(5)),
  new BinaryTree(3, new BinaryTree(6))
);

// time=O(N) | space=O(N) | N=nodes

function branchSums(rootNode) {
  const sums = [];

  function calculateBranchSums(node, runningSum, sums) {
    if (!node) {
      return;
    }

    let newRunningSum = runningSum + node.value;
    
    if (!node.right && !node.left) {
      sums.push(newRunningSum);
      return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
  }

  calculateBranchSums(rootNode, 0, sums);
  return sums;
}
