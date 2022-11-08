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

  // Insert at index
  insertAt(value, index) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    const node = new Node(value);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return console.log(current.value);
      }
      count++;
      current = current.next;
    }
    return null;
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
// ll.printListData();
ll.getAt(2);
