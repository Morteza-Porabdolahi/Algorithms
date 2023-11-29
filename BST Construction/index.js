class BST {
  constructor(value, left, right) {
    this.left = left || null;
    this.right = right || null;
    this.value = value;
  }

  // Average: Time O(log(N)) && Space O(1)
  // Worst: Time O(N) && Space O(1)
  insert(value) {
    let currentNode = this;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }


  contains(value) {
    let currentNode = this;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // Average: Time O(log(N)) && Space O(1)
  // Worst: Time O(N) && Space O(1)
  remove(value, parentNode = null) {
    let currentNode = this;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (!parentNode && !currentNode.left && !currentNode.right) {
          currentNode.value = null;
        } else if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue();
          // currentNode.value = smallest value of the right subtree
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (currentNode === parentNode.left) {
          parentNode.left = currentNode.left || currentNode.right;
        } else if (currentNode === parentNode.right) {
          parentNode.right = currentNode.left || currentNode.right;
        }

        break;
      }
    }

    return this;
  }

  getMinValue() {
    let currentNode = this;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }
}
