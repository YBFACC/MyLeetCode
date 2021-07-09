/*
 * @lc app=leetcode.cn id=1449 lang=typescript
 *
 * [1449] 数位成本和为目标值的最大数字
 */

// @lc code=start

//参考--dp
//贪心：数的位数越多越大

function largestNumber(cost: number[], target: number): string {
  const dp = Array.from({ length: 10 }, () => Array.from({ length: target + 1 }, () => -Infinity))
  //记录转移来源
  const from = Array.from({ length: 10 }, () => Array.from({ length: target + 1 }, () => 0))
  dp[0][0] = 0;

  for (let i = 0; i < 9; i++) {
    const c = cost[i]
    for (let j = 0; j <= target; j++) {
      if (j < c) {
        dp[i + 1][j] = dp[i][j]
        from[i + 1][j] = j
      } else {
        if (dp[i][j] > dp[i + 1][j - c] + 1) {
          dp[i + 1][j] = dp[i][j]
          from[i + 1][j] = j
        } else {
          dp[i + 1][j] = dp[i + 1][j - c] + 1
          //只有这步进行了转移，只需要统计这步
          from[i + 1][j] = j - c
        }
      }
    }
  }

  if (dp[9][target] < 0) return '0'
  const sb = [];
  let i = 9, j = target;
  while (i > 0) {
    if (j === from[i][j]) {
      i--
    } else {
      sb.push(i)
      j = from[i][j]
    }
  }

  return sb.join('');
};
// @lc code=end

largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9)