/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }
  let formerGrayCode = grayCode(n-1);
  return [
    ...formerGrayCode,
    ...formerGrayCode.reverse().map(v => v + Math.pow(2, n-1)),
  ];
};
console.log(grayCode(3));

