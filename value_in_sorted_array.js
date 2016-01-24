function bSearch(arrays, target) {
  var arr = [].concat.apply([], arrays);
  var pivot = Math.floor(arr.length/2);
  if (arr[pivot] === target) {
    return pivot;
  } else if (arr[pivot] > target) {
    return sortedArrays(arr.slice(0, pivot),5);
  } else if (arr[pivot] < target) {
     return pivot + sortedArrays(arr.slice(pivot),5);
  } else {
    return -1;
  }
}

function sortedArrays(arrays, target) {
  var index = bSearch(arrays, target);
  for(var i = 0; i < arrays.length; i++) {
    var arr = arrays[i];
    for(var j = 0; j < arr.length; j++) {
      if(arr[j] === target) {return [i,j];}
    }
  }
}


console.log(sortedArrays([[1,2,3],[5,8,11],[49,50,90,99]], 5));
 // Given a sorted array of sorted arrays (none of which intersect), find the given value.

 // ex sortedArrays([[1,2,3],[5,8,11],[49,50,90,99]], 5);
 // returns  [1,0];
 //


function factorial(n) {
  if (n === 0) {
    return 1;
  }
  console.log(n*(factorial(n-1)));
  return n * factorial(n-1);
}

console.log(factorial(10));
