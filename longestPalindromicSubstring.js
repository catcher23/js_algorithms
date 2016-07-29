// find the longest palindromic substring **incomplete

var longestPalindrome = function(s) {
    if (isPalindrome(s)) return s;

    var middle = Math.floor(s.length/2),
    longest = s[middle], i = 1, left = middle - 1, right = middle + 1, subStr;

    while (left >= 0) {
      subStr = s.slice(left, right);

      if (!isPalindrome(subStr)) {
        middle = middle - 1;
        left = middle - 1;
        right = middle + 1;
      } else {
        right += 1;
        left -= 1;
      }
      if (isPalindrome(subStr) && subStr.length > longest.length) {
        longest = subStr;
      }
    }

    while (right <= s.length) {
      subStr = s.slice(left, right);
      if (!isPalindrome(subStr)) {
        middle = middle + 1;
        left = middle - 1;
        right = middle + 1;
      } else {
        right += 1;
        left -= 1;
      }
      if (isPalindrome(subStr) && subStr.length > longest.length) {
        longest = subStr;
      }
    }

    return longest;
};

var isPalindrome = function(s) {
  for (var i = 0; i < s.length/2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};

console.log(longestPalindrome('adam'));
