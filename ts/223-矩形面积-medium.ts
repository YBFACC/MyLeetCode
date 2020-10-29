/*
 * @lc app=leetcode.cn id=223 lang=typescript
 *
 * [223] 矩形面积
 */

// @lc code=start
//参考--别想太多--直接按坐标暴力求解
//https://leetcode-cn.com/problems/rectangle-area/solution/223-ju-xing-mian-ji-wu-tao-lu-chun-bao-li-java-by-/
function computeArea(A: number, B: number, C: number, D: number,
  E: number, F: number, G: number, H: number): number {
  let area1 = (C - A) * (D - B)
  let area2 = (G - E) * (H - F)
  let lx = Math.max(A, E);
  let by = Math.max(B, F);
  let rx = Math.min(C, G);
  let ty = Math.min(D, H);

  if (E > C || G < A || B > H || F > D) {
    return area1 + area2
  }

  return area1 + area2 - (rx - lx) * (ty - by)
};
// @lc code=end

