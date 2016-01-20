function largestDifference (arr) {
  var highest = arr[1];
  var lowest = arr[0];
  var biggestDiff = 1 - 0;
  var flag;
  for (var i = 2; i < arr.length; i++) {
    if(arr[i] > highest) {
      highest = arr[i];
      flag = true;
    }
    if(arr[i] < lowest) {
      lowest = arr[i];
    }
    if(flag) {
      biggestDiff = highest - lowest;
      flag = false;
    }
  }
  return biggestDiff;
}

console.log(largestDifference([9,4,1,10,3,4,0,-1,-2]));

// Write a function which takes an array data of numbers and returns the largest difference such that data[i] <= data[j]
//
// [1:23]
// Test.expect (largestDifference([9,4,1,10,3,4,0,-1,-2]) == 9) # data[1] <= data[5), so 5 - 1 = 4
// Test.expect (largestDifference([3,2,1]) == 0) # never finds data[n<i] <= data[i]
