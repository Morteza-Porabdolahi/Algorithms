// TIME = O(N) N = list.length && SPACE = O(1)
function removeNthNodeFromLinkedList(head,n) {
  let first = head, second = head, counter = 1;

  while(counter <= n) {
    second = second.next;
    counter++;
  }

  if(!second) {
    head.value = head.next.value;
    head.next = head.next.next;
  }

  while(second.next) {
    first = first.next;
    second = second.next;
  }

  first.next = first.next.next;
  
  return head;
}

class Node {
  constructor(value,next) {
    this.value = value;
    this.next = next;
  }
}

