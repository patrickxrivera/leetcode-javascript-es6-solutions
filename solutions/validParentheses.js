/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    switch (true) {
      case pairs[s[i]] !== undefined:
        stack.push(pairs[s[i]]);
        break;
      case stack.length === 0:
      case stack.pop() !== s[i]:
        return false;
      default:
        break;
    }
  }

  return stack.length === 0;
};
