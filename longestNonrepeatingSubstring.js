// var lengthOfLongestSubstring = function(s) {
//   var map = {};
//   var longest = 0, count = 0, length = s.length, i,j, letter;
//
//   for (i = 0; i < length; i++) {
//       if (longest >= length - i) {
//           return longest;
//       }
//       outerLoop:
//       for (j = i; j < length; j++) {
//           letter = s[j];
//           if (map[letter] === undefined) {
//               map[letter] = letter;
//               count += 1;
//               longest = count > longest ? count : longest;
//           } else {
//               i = j;
//               map = {};
//               count = 0;
//               break outerLoop;
//           }
//       }
//   }
//   return longest;
// };
//
// // console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("dfkydzvjlngpkvqcsunyeiaxkijnwnvzsfzyewhpkpewmwbeqocwwetgmcwkrrjkwikahtrtivpurqbjgf"));

var lengthOfLongestSubstring = function(s) {
    var set = new Set(), length = s.length, longest = 0, i = 0, j = 0;
    while (j < length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            j += 1;
            longest = longest > j - i ? longest : j - i;
        } else {
            set.delete(s[i]);
            i += 1;
        }
        // console.log([i,j]);
    }
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));


// o(n) time and o(j-i) space (sliding window)
