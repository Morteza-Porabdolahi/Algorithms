// time=O(n) space=O(n)
/* function invertBinaryTree(tree) {
  let stack = [tree];

  while (stack.length > 0) {
    let node = stack.pop();

    if (!node.right && !node.left) {
      continue;
    }

    [node.left, node.right] = [node.right, node.left];

    if (node.left) {
      stack.push(node.left)
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return tree;
} */

// time=O(n) , space=O(depth of the tree || height of the tree || log(n)) 
/* function invertBinaryTree(tree) {
  function invertBinaryTreeHelper(node) {
    if (!node) {
      return;
    }

    [node.right, node.left] = [node.left, node.right];

    invertBinaryTree(node.left);
    invertBinaryTree(node.right);
  }

  invertBinaryTreeHelper(tree);
  return tree;
} */

class BinaryTree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
