class LinkedList {
  constructor(head) {
    this.head = head;
  }

  add(value) {
    this.head = new Node(value, this.head);

    return this;
  }

  at(index) {
    if (index === 0) {
      return this.head;
    }

    let currentNode = this.head,
      position = 0;

    while (position < index) {
      currentNode = currentNode.next;
      position++;
    }

    return currentNode;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }

  remove(value) {
    if (value === this.head.value) {
      this.head = this.head.next;
      return this;
    }

    let counter = 1,
      prevNode = this.head,
      currentNode = prevNode.next;

    while (currentNode) {
      if (currentNode.value === value) {
        prevNode.next = currentNode.next;
        return currentNode;
      }

      counter++;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return this;
    if (index === 0) return this.add(value);

    let counter = 1,
      currentNode = this.head.next,
      prevNode = this.head,
      newNode = new Node(value);

    while (true) {
      if (counter === index) {
        newNode.next = currentNode;
        prevNode.next = newNode;
        break;
      }

      counter++;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  get size() {
    let counter = 0,
      currentNode = this.head;

    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }

    return counter;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function mergeSortLinkedList(linkedList) {
  // takes O(log n * k * n)
  if (linkedList.size === 1) {
    return linkedList;
  } else if (!linkedList.head) {
    return linkedList;
  }

  const [leftHalf, rightHalf] = splitLinkedList(linkedList);

  const left = mergeSortLinkedList(leftHalf);
  const right = mergeSortLinkedList(rightHalf);

  return mergeLinkedList(left, right);
}

function splitLinkedList(linkedList) {
  // takes O(k log n) time
  // Divide
  let leftHalf, rightHalf;

  if (!linkedList || !linkedList.head) {
    leftHalf = linkedList;
    rightHalf = null;
  } else {
    const sizeOfTheList = linkedList.size,
      midpoint = Math.floor(sizeOfTheList / 2),
      midNode = linkedList.at(midpoint - 1); // takes O(k)

    leftHalf = linkedList;
    rightHalf = new LinkedList(midNode.next);

    midNode.next = null;
  }

  return [leftHalf, rightHalf];
}

function mergeLinkedList(left, right) {
  // take O(max(left,right))
  // Conquer
  /* 
   * Merges two linked lists, sorting by value in nodes 
   @return merged list 
  */

  let mergedList = new LinkedList();

  // add a fake head that is discarded later
  mergedList.add(0);

  let current = mergedList.head,
    leftHead = left.head,
    rightHead = right.head;

  while (leftHead || rightHead) {
    if (!leftHead) {
      current.next = rightHead;
      break;
    }

    if (!rightHead) {
      current.next = leftHead;
      break;
    }

    if (leftHead && rightHead) {
      let leftVal = leftHead.value,
        rightVal = rightHead.value;

      if (leftVal < rightVal) {
        current.next = leftHead;
        leftHead = leftHead.next;
      } else {
        current.next = rightHead;
        rightHead = rightHead.next;
      }
    }

    current = current.next;
  }

  mergedList.head = mergedList.head.next;

  return mergedList;
}

function bogoSort(array = []) {
  function isSorted() {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }

    return true;
  }

  function shuffle() {
    let randomIdx = Math.floor(Math.random() * array.length),
      randomIdx2 = Math.floor(Math.random() * array.length);

    [array[randomIdx], array[randomIdx2]] = [
      array[randomIdx2],
      array[randomIdx],
    ];
  }

  function sort() {
    let attempts = 0;
    while (!isSorted()) {
      console.log(attempts)
      shuffle();
      attempts++;
    }

    return array;
  }

  return sort();
}

function createArray(size) {
  let arr = Array(size);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
  }

  return arr;
}

function selectionSort(unsortedArr = []) {
  // time O(n^2)
  let sortedArr = [];

  function getMinIndex() {
    let minIndex = 0;

    for(let i = 1; i < unsortedArr.length; i++) {
      if(unsortedArr[i] < unsortedArr[minIndex]) {
        minIndex = i;
      }
    }

    return minIndex;
  }

  while(unsortedArr.length !== 0) {
    let minIndex = getMinIndex()
    sortedArr.push(...unsortedArr.splice(minIndex,1));
  }

  return sortedArr;
}
