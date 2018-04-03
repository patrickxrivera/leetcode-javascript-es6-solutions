/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
  const length = digits.length;

  for (let i = length - 1; i >= 0; i--) {
    const currNum = digits[i];

    if (currNum < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  const results = Array(length + 1).fill(0);
  results[0] = 1;

  return results;
};

const digits = [9, 9];

plusOne(digits);
