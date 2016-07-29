function LinkedListNode (value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {

    this.length = 0; // {2}
    this.head = null; // {3}

    this.insert = function(position, value){};
    this.removeAt = function(position){};
    this.remove = function(value){};
    this.indexOf = function(value){};
    this.isEmpty = function() {};
    this.size = function() {};
    this.toString = function(){};
    this.print = function(){};
}

LinkedList.prototype.reverse = function(head) {
  if (head === null) return [];
  var curr = head, prev, next;
  while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
};
