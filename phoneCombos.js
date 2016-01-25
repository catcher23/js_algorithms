function letterCombos(numbers) {
  var map = {};
  map[2] = 'abc';
  map[3] = 'def';
  map[4] = 'ghi';
  map[5] = 'jkl';
  map[6] = 'mno';
  map[7] = 'pqrs';
  map[8] = 'tuv';
  map[9] = 'wxyz';
  map[0] = '';


}
console.log(letterCombos('23'));
console.log(letterCombos('2'));
console.log(letterCombos('234'));
// Given a digit string, return all possible letter combinations that the
// number could represent.
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
