// Write an efficient function that checks whether any permutation of an input
//string is a palindrome .
// Examples:
//
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function permPal(str) {
  var chars = new Set(),
  char,
  i;
  for (i = 0; i < str.length; i++) {
    char = str[i];
    if (chars.has(char)) {
      chars.delete(char);
    } else {
      chars.add(char);
    }
  }
  return chars.length <= 1;
}

//o(n) time o(1) space
