function LinkedList() {
  this.length = 0;
  this.head = null;
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.append = function(node) {
  var current;
  if (this.head === null) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next !== null){
      current = current.next;
    }
  }
  this.length += 1;
};

LinkedList.prototype.delete = function(node) {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    alert ("doesn't work for last node");
  }
};

var linkedList = new LinkedList();
var a = new LinkedListNode(1);
var b = new LinkedListNode(2);
var c = new LinkedListNode(3);
a.next = b;
b.next = c;



linkedList.append(a);
linkedList.append(b);
linkedList.append(c);
linkedList.delete(b);
console.log(linkedList.head);
