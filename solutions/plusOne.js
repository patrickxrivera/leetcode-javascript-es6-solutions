/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    const newDigit = digits[i] + 1;

    if (newDigit !== 10) {
      digits[i] = newDigit;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};

plusOne([9]);
