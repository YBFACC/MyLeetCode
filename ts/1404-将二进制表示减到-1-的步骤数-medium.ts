/*
 * @lc app=leetcode.cn id=1404 lang=typescript
 *
 * [1404] 将二进制表示减到 1 的步骤数
 */

// @lc code=start
//参考--对0和1分类讨论--官方题解

function numSteps(s: string): number {
  let res = 0
  const Len = s.length
  let meet = false
  for (let i = Len - 1; i >= 0; i--) {
    if (s[i] === '0') {
      res += meet ? 2 : 1
    } else {
      if (!meet) {
        if (i !== 0) {
          res += 2
        }
        meet = true
      } else {
        res++
      }
    }
  }

  return res
};
// @lc code=end
numSteps("10")

numSteps("1101")