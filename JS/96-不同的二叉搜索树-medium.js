/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * 自己--F(i,n)=G(i-j-1)+G(j)--性能好
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let list = Array(n + 1).fill(0)
  list[0] = 1
  list[1] = 1
  list[2] = 2
  list[3] = 5
  for (let i = 4; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      list[i] += list[i - j - 1] * list[j]
    }
  }
  return list[n]
}
// @lc code=end
numTrees(5)
