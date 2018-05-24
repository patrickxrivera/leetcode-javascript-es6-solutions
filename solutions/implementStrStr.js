/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (haystack === needle) return 0;

  const subStrLength = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    const subStr = haystack.slice(i, i + subStrLength);

    if (subStr === needle) return i;
  }

  return -1;
};

const haystack = 'hello',
  needle = 'll';

strStr(haystack, needle);
