function binarySearch(arr, target) {
  var pivot = Math.floor(arr.length/2);
  if (arr[pivot] === target) {
    return pivot;
  } else if (arr[pivot] > target) {
    console.log(arr);
    return sortedArrays(arr.slice(0, pivot),5);
  } else if (arr[pivot] < target) {
    console.log(arr);
     return pivot + sortedArrays(arr.slice(pivot),5);
  } else {
    return -1;
  }
}

console.log(binarySearch([1,2,3,5,8,11,49,50,90,99], 11));
