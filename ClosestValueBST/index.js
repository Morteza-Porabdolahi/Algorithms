class BST {
  constructor(value, left, right) {
    this.left = left || null;
    this.right = right || null;
    this.value = value;
  }
}
// Average: Time O(log(N)) && Space O()
// Worst: Time O(N) && Space O(1)

/*function findClosestValueInBST(rootNode ,value) {
  let currentNode = rootNode,
    closestValue = Infinity;

  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode.value;
    } else if (Math.abs(value - currentNode.value) < Math.abs(value - closestValue)) {
      closestValue = currentNode.value;
    }

    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      currentNode = currentNode.right;
    }
  }

  return closestValue;
}*/

// Average: Time O(log(N)) && Space O(log(N))
// Worst: Time O(N) && Space O(N)

/*function findClosestValueInBST(rootNode, value) {

  function findClosestValueInBSTHelper(tree, target, closest = Infinity) {
    if (!tree) {
      return closest;
    }

    if(target === tree.value){
      return tree.value;
    }else if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
      closest = tree.value;
    }

    if (value < tree.value) {
      return findClosestValueInBSTHelper(tree.left, target, closest);
    } else if (value > tree.value) {
      return findClosestValueInBSTHelper(tree.right, target, closest);
    }
  };

  return findClosestValueInBSTHelper(rootNode, value);
}*/
