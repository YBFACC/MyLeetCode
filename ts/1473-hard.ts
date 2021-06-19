/*
 * @lc app=leetcode.cn id=1473 lang=typescript
 *
 * [1473] 粉刷房子 III
 */

//参考--dp-四重循环

// @lc code=start
function minCost(houses: number[], cost: number[][], m: number, n: number, target: number): number {
  //按照官方的处理，将未涂色的房子从0变成-1
  houses = houses.map(c => --c);
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array.from({ length: target }, () => Infinity)))

  //0～i 第i个房子
  for (let i = 0; i < m; i++) {
    //0～j 第i个房子的第j种颜色
    for (let j = 0; j < n; j++) {
      if (houses[i] !== -1 && houses[i] !== j) {
        continue;
      }
      //0～k 第i个房子的第j种颜色的第k个社区
      for (let k = 0; k < target; k++) {
        //0～j0 第i-1个房子的第j0种颜色
        for (let j0 = 0; j0 < n; j0++) {
          if (j === j0) {
            if (i === 0) {
              if (k === 0) {
                dp[i][j][k] = 0
              }
            } else {
              dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j][k]);
            }
          } else if (i > 0 && k > 0) {
            dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j0][k - 1]);
          }
        }

        if (dp[i][j][k] !== Infinity && houses[i] === -1) {
          dp[i][j][k] += cost[i][j]
        }
      }
    }
  }

  let res = Infinity
  for (let j = 0; j < n; j++) {
    res = Math.min(res, dp[m - 1][j][target - 1])
  }

  return res === Infinity ? -1 : res
};
// @lc code=end
