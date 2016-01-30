Array.prototype.bubbleSort = function(comparator) {
  newarr = [];
  for (var a = 0; a < this.length; a++) {
    newarr.push(this[a]);
  }
  if (newarr.length < 2) {return newarr;}
  if (typeof comparator !== 'function') {
    comparator = function(x,y) {
      if (x===y) {return 0;}
      if (x < y) {return -1;}
      if (x > y) {return 1;}
    };
  }
  var sorted = false;
  while (sorted === false) {
    sorted = true;
    for (var i = 0; i+1 < newarr.length; i++) {
      if (comparator(newarr[i], newarr[i+1]) > 0) {
        temp = newarr[i];
        newarr[i] = newarr[i+1];
        newarr[i+1] = temp;
        sorted = false;
      }
    }
  }
  return newarr;
};

console.log([5,3,7,3,4,7,8].bubbleSort());
