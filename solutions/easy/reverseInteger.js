/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  if (x === 0) return 0;

  const isPositive = Boolean(x > 0);

  const num = isPositive ? getReversed(x) : getReversed(-x);

  if (isInvalid(num)) return 0;

  return num * (isPositive ? 1 : -1);
};

const getReversed = (x) =>
  Number(
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  );

const isInvalid = (num) => num >= 2147483647;

reverse(-120);
