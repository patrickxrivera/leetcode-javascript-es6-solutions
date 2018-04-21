/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let str = '';
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const idx = str.indexOf(s[i]);

    if (idx !== -1) {
      str = str.slice(idx + 1);
    }

    str += s[i];

    max = Math.max(max, str.length);
  }

  return max;
};
