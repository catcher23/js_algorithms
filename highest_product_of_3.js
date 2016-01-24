function highest_product(arr){
  var highest = arr[0];
  var lowest = arr[0];
  var highestTwo = arr[0] * arr[1];
  var lowestTwo = arr[0] * arr[1];
  highestThree = arr[0] * arr[1] * arr[2];
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] * highest > highestTwo) {
      highestTwo = arr[i] * highest;
    }
    if(arr[i] * lowest > highestTwo) {
      highestTwo = arr[i] * lowest;
    }
    if (arr[i] * highestTwo > highestThree) {
      highestThree = arr[i] * highestTwo;
    }
    if (arr[i] * lowestTwo > highestThree) {
      highestThree = arr[i] * lowestTwo;
    }
  }
  return highestThree;
}

console.log(highest_product([-10, -10, 3, 2, 1]));

// Given an array_of_ints, find the highest_product you can get from three of the integers.
// The input array_of_ints will always have at least three integers.
