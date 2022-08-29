/**
 * 自己－－模拟解方程
 * @param equation 
 * @returns 
 */

function solveEquation(equation: string): string {
  let [left, right] = equation.split('=');
  let [leftNum, leftX] = helper(left);
  let [rightNum, rightX] = helper(right);
  leftX -= rightX;
  rightNum -= leftNum

  if (leftX === 0) {
    return rightNum === 0 ? "Infinite solutions" : "No solution"
  }
  const res = rightNum / leftX
  return `x=${res}`;
};

function helper(str: string) {
  let num = 0, countX = 0

  if (str[0] === '-') {
    str = '0' + str
  } else {
    str = '0+' + str
  }

  str = str.replace(/-/g, '+-')

  const strList = str.split('+');
  strList.forEach(item => {
    if (item.includes('x')) {
      item = item.replace('x', '');
      item === '-' && (item = '-1')
      item === '' && (item = '1')
      countX += +item
    } else {
      num += +item
    }
  })

  return [num, countX]
}

solveEquation("1-x+x-x+x=99")