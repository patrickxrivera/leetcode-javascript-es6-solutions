/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (s) => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], Infinity);
      continue;
    }

    map.set(s[i], i);
  }

  for (let [k, v] of map) {
    if (v !== Infinity) {
      return v;
    }
  }

  return -1;
};
