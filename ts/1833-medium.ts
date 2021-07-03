/*
 * @lc app=leetcode.cn id=1833 lang=typescript
 *
 * [1833] 雪糕的最大数量
 */

//copy--简单的贪心

// @lc code=start
function maxIceCream(costs: number[], coins: number): number {

  costs.sort((a, b) => a - b);
  let count = 0;
  const n = costs.length;
  for (let i = 0; i < n; i++) {
    const cost = costs[i];
    if (coins >= cost) {
      coins -= cost;
      count++;
    } else {
      break;
    }
  }
  return count;

};
// @lc code=end

