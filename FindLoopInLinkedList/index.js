class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Space = O(1) && Time = O(N)
function findLoopInLinkedList(list) {
  let i = list,
  j = list;

  do {
    i = i.next;
    j = j.next.next;

  } while(i.value !== j.value);

  i = list;

  while(i.value !== j.value) {
    i = i.next;
    j = j.next;
  }

  return j;
}

const node7 = new Node(7)
const node4 = new Node(4, new Node(5, new Node(6, node7)))
const list = new Node(0, new Node(1, new Node(2, new Node(3, node4))))

node7.next = {
  value: 8,
  next: node4,
}

findLoopInLinkedList(list)

