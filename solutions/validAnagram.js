/* Faster than 100% of Leetcode solutions!!! */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const handleCount = (count, str, modifier) => {
  const OFFSET = 97;

  for (let i = 0; i < str.length; i++) {
    const currCharCode = str[i].charCodeAt();
    const currIdx = currCharCode - OFFSET;
    count[currIdx] += 1 * modifier;
  }
};

const isZero = (num) => num === 0;

const isAnagram = (s, t) => {
  const INCREMENT = 1;
  const DECREMENT = -1;
  let count = Array(26).fill(0);

  handleCount(count, s, INCREMENT);
  handleCount(count, t, DECREMENT);

  return count.every(isZero);
};
