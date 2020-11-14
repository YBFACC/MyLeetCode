/*
 * @lc app=leetcode.cn id=233 lang=typescript
 *
 * [233] 数字 1 的个数
 */

//参考--递归

//23456->可以划分为两个区间 [10000, 19999], [3457, 9999]U[20001, 23456]
//对任意一个区间，后面4个数字，选择其中一个为1，其他三个都可以在0~9中任意选择，因此一共有 2*4*10^3 个1

// @lc code=start
function countDigitOne(n: number): number {
  if (n <= 0) return 0
  if (n < 10) return 1

  const str = n + ''
  let high = +str[0]
  const Len = str.length
  const lowwer = n - high * Math.pow(10, Len - 1)

  let floor = high === 1 ? (lowwer + 1) : Math.pow(10, Len - 1)

  //关键
  let orther = high * (Len - 1) * Math.pow(10, Len - 2)

  return floor + orther + countDigitOne(lowwer)
};
// @lc code=end

console.log(countDigitOne(13))