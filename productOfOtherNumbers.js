function otherProducts(arr){
  var products = [];
  var befores = 1;
  var afters = 1;
  var reverseI = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {
    products[i] = befores;
    products[reverseI] = afters;
    befores *= arr[i];
    afters *= arr[reverseI];
    reverseI -= 1;
  }
  return products;
}

console.log(otherProducts([1,7,3,4]));
// o(n) time and o(n) space
// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.
//
// For example, given:
//
// [1, 7, 3, 4]
//
// your function would return:
//
// [84, 12, 28, 21]
//
// by calculating:
//
// [7*3*4, 1*3*4, 1*7*4, 1*7*3]
