/*
 * @lc app=leetcode.cn id=899 lang=typescript
 *
 * [899] 有序队列
 */

// @lc code=start
//提示--脑筋急转弯
function orderlyQueue(S: string, K: number): string {
  if (K > 1) {
    return S.split('').sort().join('')
  }
  let res = S
  const Len = S.length
  for (let i = 1; i < Len; i++) {
    const strat = S.slice(i)
    const end = S.slice(0, i)
    if (strat + end < res) {
      res = strat + end
    }
  }
  return res
};
// @lc code=end

console.log(orderlyQueue("cba", 1))