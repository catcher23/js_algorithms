function largestDifference (arr) {
  var max = arr.length - 1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[max] && i !== max) {
      return max;
    }
    max -= 1;
  }
  return 0;
}

console.log(largestDifference([9,4,1,10,3,4,0,-1,-2]));
console.log(largestDifference([3,2,1]));

// Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that data[i] <= data[j]
//
// [1:23]
// Test.expect (largestDifference([9,4,1,10,3,4,0,-1,-2]) == 4) # data[1] <= data[5), so 5 - 1 = 4
// Test.expect (largestDifference([3,2,1]) == 0) # never finds data[n<i] <= data[i]
