function binarySearch(arr, target) {
  var pivot = Math.floor(arr.length/2), result;
  if (arr[pivot] === target) {
    return pivot;
  } else if (arr[pivot] > target) {
      return binarySearch(arr.slice(0, pivot), target);
  } else {
    result = arr.length > 1 ? binarySearch(arr.slice(pivot), target) : -1;
    if (result !== -1) {
      result += pivot;
    }
    return result;
  }
}

console.log(binarySearch([1,2,3,5,8,11,49,50,90,99],5));
console.log(binarySearch([1,2,3,5,8,11,49,50,90,99],50));
