/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function f(str) {
  if (str.length === 0) return [""];
  const a = str[0], b = [a.toLowerCase(), a.toUpperCase()];
  b[0] === b[1] && b.pop();
  if (str.length === 1) return b;
  return f(str.slice(1)).reduce((r, c) => [...r, ...b.map(m => m + c)], []);
};
new letterCasePermutation('12aws345')