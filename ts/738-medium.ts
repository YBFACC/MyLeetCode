/*
 * @lc app=leetcode.cn id=738 lang=typescript
 *
 * [738] 单调递增的数字
 */

//提示--贪心--从右向左遍历
//i项比i-1项大，i-1，后面全部改9

// @lc code=start

function monotoneIncreasingDigits(N: number): number {
  let str = N + ''
  if (str.length === 1) return N
  const Len = str.length
  for (let i = Len - 2; i >= 0; i--) {
    if (str[i] > str[i + 1]) {
      str = str.slice(0, i) + (+str[i] - 1) + '9'.repeat(Len - i - 1)
    }
  }
  return parseInt(str, 10)
};
// @lc code=end

console.log(monotoneIncreasingDigits(332))
