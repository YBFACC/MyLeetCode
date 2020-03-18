/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * 参考--计算机图形学的基本算法--性能差
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  return !(
    rec1[2] <= rec2[0] ||
    rec1[0] >= rec2[2] ||
    rec1[3] <= rec2[1] ||
    rec1[1] >= rec2[3]
  )
}
// @lc code=end
