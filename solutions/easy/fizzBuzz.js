/**
 * @param {number} n
 * @return {string[]}
 */

const isBuzz = (i) => i % 5 === 0;

const isFizz = (i) => i % 3 === 0;

const isFizzBuzz = (i) => i % 5 === 0 && i % 3 === 0;

var fizzBuzz = function(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    switch (true) {
      case isFizzBuzz(i):
        arr.push('FizzBuzz');
        break;
      case isFizz(i):
        arr.push('Fizz');
        break;
      case isBuzz(i):
        arr.push('Buzz');
        break;
      default:
        arr.push(String(i));
    }
  }

  return arr;
};

fizzBuzz(15);
