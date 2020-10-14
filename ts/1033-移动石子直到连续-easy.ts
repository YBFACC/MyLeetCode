/*
 * @lc app=leetcode.cn id=1033 lang=typescript
 *
 * [1033] 移动石子直到连续
 */

// @lc code=start
function numMovesStones(a: number, b: number, c: number): number[] {
  const z = Math.max(a, b, c);
  const x = Math.min(a, b, c);
  const y = a + b + c - z - x;
  return [(y - x === 2 || z - y === 2) ?
    1 :
    ((z - y > 1 ? 1 : 0) + (y - x > 1 ? 1 : 0)),
  z - y - 1 + y - x - 1];
};

// @lc code=end

