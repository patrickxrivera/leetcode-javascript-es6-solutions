/**
 * @param {string} s
 * @return {boolean}
 */

const format = (s) =>
  s
    .split(' ')
    .join('')
    .replace(/[^0-9a-z]/gi, '');

const isPalindrome = function(s) {
  s = format(s);

  const midpoint = Math.floor(s.length / 2);

  for (let i = 0; i < midpoint; i++) {
    const front = s[i];
    const back = s[s.length - 1 - i];

    if (front.toLowerCase() !== back.toLowerCase()) return false;
  }

  return true;
};

isPalindrome('A man, a plan, a canal: Panama');
