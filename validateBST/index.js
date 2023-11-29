class BST {
  constructor(value, left, right) {
    this.left = left || null;
    this.right = right || null;
    this.value = value;
  }
}

// T=Time, S=space, d=depth, N=number of nodes => Best case: T(N) S(d) && Worst case: T(N) S(N)
function validateBST(tree) {
  function validateBSTHelper(node, min, max) {
    if (!node) {
      return true;
    }

    if (node.value < max && node.value >= min) {
      const leftResult = validateBSTHelper(node.left, min, node.value);

      return leftResult ? validateBSTHelper(node.right, node.value, max) : false;
    } else {
      return false;
    }
  }

  return validateBSTHelper(tree, -Infinity, Infinity);
}

