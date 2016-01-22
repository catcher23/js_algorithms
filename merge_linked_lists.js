function Node(value, next) {
  this.value = value;
  this.next = next;
}

var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L1 = n4;

var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node (1, n2);
var L2 = n1;

function merge (L1, L2) {
  var L3 = new Node(null, null);
  // create a pointer to L3. When change value property of prev L3 also changed
  var prev = L3;

  while (L1 !== null && L2 !== null) {
        console.log(L3);
      if (L1.value <= L2.value) {
        prev.next = L1;
        L1 = L1.next;
      } else {
        prev.next = L2;
        L2 = L2.next;
      }
      prev = prev.next;
  }
  if (L1 === null) { prev.next = L2;}
  if (L2 === null) { prev.next = L1;}
  return L3.next;
}

console.log(merge(L1, L2));
