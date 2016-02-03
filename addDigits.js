// Given a non-negative integer num, repeatedly add all its digits until the result
// has only one digit.
//
// For example:
//
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one
// digit, return it.

function addDigits (num) {
  num = num.toString();
  var result,
  i;
  while (num.length > 1) {
    result = 0;
    for (i = 0; i < num.length; i++) {
      result += parseInt(num[i]);
    }
    num = result.toString();
  }
  return parseInt(num);
}

console.log(addDigits(38));
