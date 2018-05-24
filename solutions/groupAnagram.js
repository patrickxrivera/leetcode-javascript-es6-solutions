/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
  if (strs.length === 0) return [[]];

  const output = [];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const currStr = strs[i];
    const sortedStr = currStr
      .split('')
      .sort()
      .join('');

    if (map.has(sortedStr)) {
      const idx = map.get(sortedStr);
      output[idx].push(currStr);
      continue;
    }

    const anagramIdx = output.length;
    map.set(sortedStr, anagramIdx);
    output[anagramIdx] = [currStr];
  }

  return output;
};
