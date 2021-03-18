/*
 * @lc app=leetcode.cn id=1018 lang=typescript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

//自己--注意溢出

// @lc code=start
function prefixesDivBy5(A: number[]): boolean[] {
  let temp = A[0]
  const Len = A.length
  const res: boolean[] = [A[0] === 0]
  for (let i = 1; i < Len; i++) {
    temp = ((temp << 1) + A[i]) % 10
    res.push(temp % 5 === 0)
  }

  return res
};
// @lc code=end

prefixesDivBy5([1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1])