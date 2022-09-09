/**
 * 自己－－模拟
 * @param logs 
 * @returns 
 */

function minOperations(logs: string[]): number {
  let res = 0
  logs.forEach((log) => {
    if (log === './') return
    else if (log === '../') {
      res = res > 0 ? res - 1 : 0
    } else {
      res += 1
    }
  })

  return res
};