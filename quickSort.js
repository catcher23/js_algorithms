function quickSort(array) {
  if (array.length === 0) { return []; }
  var left = [], right = [],
  middle = Math.floor(array.length/2),
  pivot = array[middle];

  for (var i = 0; i < array.length; i++) {
    if (i === middle) { continue; }
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
console.log("quickSort([4, 5, 2, 3, 1]) = " + quickSort([4, 5, 2, 3, 1]));

// n log n
