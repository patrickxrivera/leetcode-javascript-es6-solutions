/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isZero = (num) => num === 0;

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let counter = {};

  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]] === undefined) {
      counter[s[i]] = 1;
    } else {
      counter[s[i]] += 1;
    }

    if (counter[t[i]] === undefined) {
      counter[t[i]] = -1;
    } else {
      counter[t[i]] -= 1;
    }
  }

  return Object.values(counter).every(isZero);
};
