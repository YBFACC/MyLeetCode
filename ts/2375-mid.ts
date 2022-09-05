/**
 * 自己－－回溯
 * 10^(n)时间复杂度－－高
 * @param pattern 
 * @returns 
 */

function smallestNumber(pattern: string): string {
  const Len = pattern.length
  const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])

  const helper = (Level: string, current: number, _res: string) => {
    if (Level === 'I' && current > +_res[0]) {
      return false
    }
    if (Level === 'D' && current < +_res[0]) {
      return false
    }
    return true
  }
  let res = 99999999999
  const dfs = function (index: number, _res: string) {
    if (index === -1) {
      res = Math.min(res, +_res)
      return
    }
    for (let i = 1; i < 10; i++) {
      if (set.has(i) && helper(pattern[index], i, _res)) {
        set.delete(i)
        dfs(index - 1, i + _res)
        set.add(i)
      }
    }
  }

  for (let i = 1; i < 10; i++) {
    set.delete(i)
    dfs(Len - 1, i + '')
    set.add(i)
  }

  return res + ''
};

smallestNumber("IIIDIDDD")