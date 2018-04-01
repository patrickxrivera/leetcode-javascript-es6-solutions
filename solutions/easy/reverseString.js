// Notes
// JS strings are immutable!!! If you want to do an in-place algorithm
// you'll need to split the string to an array, perform your operations, then join it

/**
 * @param {string} s
 * @return {string}
 */

const reverseString = (s) => {
  const midpoint = Math.floor(s.length / 2);

  s = s.split('');

  for (let i = 0; i < midpoint; i++) {
    s = swap(s, i);
  }

  return s.join('');
};

const swap = (s, i) => {
  let front = i;
  let back = s.length - 1 - i;

  const temp = s[front];
  s[front] = s[back];
  s[back] = temp;

  return s;
};

const s = 'hello';

reverseString(s);
