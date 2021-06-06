
//3维dp

// function findMaxForm(strs: string[], m: number, n: number): number {
//   const Len = strs.length
//   const dp = Array.from({ length: Len + 1 }, () => Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0)))
//   for (let i = 1; i <= Len; i++) {
//     const [_m, _n] = helper(strs[i-1])
        //j和k代表容量上限
//     for (let j = 0; j <= m; j++) {
//       for (let k = 0; k <= n; k++) {
//         dp[i][j][k] = dp[i - 1][j][k]
//         if (j >= _m && k >= _n) {
//           dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - _m][k - _n] + 1)
//         }
//       }
//     }
//   }

//   return dp[Len][m][n]
// };

//功能函数--统计0和1的个数

function helper(str: string): number[] {
  let num = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      num++
    }
  }
  return [num, str.length - num]
}

//少一维数据空间复杂度
//参考--反向遍历，防治覆盖有效数据

function findMaxForm(strs: string[], m: number, n: number): number {
  const Len = strs.length
  const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0))
  for (let i = 0; i < Len; i++) {
    const [_m, _n] = helper(strs[i])
    for (let j = m; j >= _m; j--) {
      for (let k = n; k >= _n; k--) {
          dp[j][k] = Math.max(dp[j][k], dp[j - _m][k - _n] + 1)
      }
    }
  }

  return dp[m][n]
};



findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)