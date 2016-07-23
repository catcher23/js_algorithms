function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    var middle = Math.floor(array.length / 2);

    var left = mergeSort(array.slice(0, middle));
    var right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}

function merge(left, right) {
  var merged = [];

  while (left.length > 0 && right.length > 0) {
    var nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}
console.log("mergeSort([4, 5, 2, 3, 1]) = " + mergeSort([4, 5, 2, 3, 1]));
