class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(value) {
    this.head = new Node(value);
    this.size++;
  }

 
}

const ll = new LinkList();

ll.insertFirst(100);
ll.insertLast(200);
ll.insertAt(300, 1);
ll.insertAt(400, 0);
ll.printListData();
