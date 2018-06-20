/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  let rev = 0;

  while (x !== 0) {
    rev = rev * 10 + x % 10;
    x = Math.round(x / 10);
  }

  return rev;
};

reverse(-123);
