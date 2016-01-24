function mergeArrays(arr1, arr2) {
  var newArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
    console.log([arr1, arr2]);
  }
  return newArr.concat(arr1, arr2);
}

myArray     = [3, 4, 6, 10, 11, 15, 20, 21, 23];
anotherArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, anotherArray));
// # prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
