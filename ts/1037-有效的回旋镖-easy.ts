/*
 * @lc app=leetcode.cn id=1037 lang=typescript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
//判断三个点是否构成三角形公式：(Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)) / 2 !== 0
const isBoomerang = (points) => {
  const Ax = points[0][0];
  const Ay = points[0][1];
  const Bx = points[1][0];
  const By = points[1][1];
  const Cx = points[2][0];
  const Cy = points[2][1];
  return (Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)) / 2 !== 0;
};

// @lc code=end

