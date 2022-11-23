
/**
 * 自己--模拟
 * @param lowLimit 
 * @param highLimit 
 * @returns 
 */
function countBalls(lowLimit: number, highLimit: number): number {
  const map = new Map()
  let res = 0
  for (let i = lowLimit; i <= highLimit; i++) {
    let str = i + '', key = 0
    str.split('').forEach(e => {
      key += +e
    });
    map.set(key, map.has(key) ? map.get(key) + 1 : 1)
    res = Math.max(res, map.get(key))
  }
  return res
};

countBalls(1, 10 )