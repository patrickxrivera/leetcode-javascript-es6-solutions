/**
 * @param {number} n
 * @return {string}
 */

const countAndSay = (n, str = '1', counter = 1) => {
  if (n <= 0) throw new Error(`Argument must be greater than 0`);
  if (counter === n) return str;

  let newStr = '';
  let streak = 1;

  for (let i = 0; i < str.length; i++) {
    const curr = str[i],
      next = str[i + 1];

    if (curr !== next) {
      newStr += String(streak) + curr;
      streak = 1;
      continue;
    }

    streak++;
  }

  return countAndSay(n, newStr, (counter += 1));
};

countAndSay(1);
