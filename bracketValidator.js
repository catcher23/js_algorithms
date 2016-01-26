function isValid (input) {

  var
  bracketHash = {
    '{' : '}',
    '[' : ']',
    '(' : ')',
  },
  preBrackets = new Set(),
  postBrackets = new Set(),
  stack = [],
  char,
  last,
  i;
  preBrackets.add('{');
  preBrackets.add('[');
  preBrackets.add('(');
  postBrackets.add('}');
  postBrackets.add(']');
  postBrackets.add(')');

  for (i = 0; i < input.length; i++) {
    char = input[i];
    if (preBrackets.has(char)) {
      stack.push(char);
    } else if (postBrackets.has(char)) {
      last = stack[stack.length - 1];
      if (bracketHash[last] !== char) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(isValid('[{()[}]'));
