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

  // Insert last node
  insertLast(value) {
    if (!this.head) {
      this.insertFirst(value);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.size++;
  }

  

  // Print the list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log(this.size);
  }
}

const ll = new LinkList();

ll.insertFirst(100);
ll.insertLast(200);
ll.insertAt(300, 1);
ll.insertAt(400, 0);
ll.printListData();
