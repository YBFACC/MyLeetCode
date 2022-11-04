/**
 * 参考－－数学
 * @param target 
 * @returns 
 */

function reachNumber(target: number): number {
  if (target < 0) {
    target = -target
  }
  let index = 0, step = 0
  while (index < target || (index - target) % 2 != 0) {
    step++
    index += step
  }

  return step
};

reachNumber(3)