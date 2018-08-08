/* 
 write a function that takes a string and performs the math operation
 it should only take 2 operands and 1 operator
 will only be (+ - / *)
 for example ("4 + 5") -> 9 or ("-3 - 10") -> -13
*/

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
const mul = (x, y) => x * y;

const operate = (str) => {
  const operations = {
    '+': add,
    '-': sub,
    '/': div,
    '*': mul
  };

  const [num1, operator, num2] = str.split(' ');

  return operations[operator](Number(num1), Number(num2));
};
