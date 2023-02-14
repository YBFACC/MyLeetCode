
/**
 * 前缀和
 * @param hours 
 * @returns 
 */
function longestWPI(hours: number[]): number {
  const map = new Map<number, number>();
  let res = 0, s = 0
  const Len = hours.length
  for (let i = 0; i < Len; i++) {
    s += hours[i] > 8 ? 1 : -1
    if (s > 0) {
      res = Math.max(res, i + 1)
    } else {
      if (map.has(s - 1)) {
        res = Math.max(res, i - (map.get(s - 1) as number))
      }
    }
    if (!map.has(s)) {
      map.set(s, i)
    }
  }

  return res
};

longestWPI([9, 9, 6, 0, 6, 6, 9])