/*
 * @lc app=leetcode.cn id=514 lang=typescript
 *
 * [514] 自由之路
 */

//提示--深搜记忆化模版--旋转字符串

// @lc code=start
// function findRotateSteps(ring: string, key: string): number {
//   const map = new Map()
//   const Len = ring.length
//   const endIndex = key.length

//   const dfs = function (str: string, key_index: number): number {
//     //记忆化--剪枝
//     const path = `${str}-${key_index}`
//     if (key_index === endIndex) return 0
//     if (map.has(path)) return map.get(path)

//     let floor = Infinity
//     //i代表从0开始的距离
//     //正向反向--转字符串长度一半即可
//     for (let i = 0; i <= Len - i - 1; i++) {
//       if (str[i] === key[key_index]) {
//         //console.log(str.slice(i) + str.slice(0, i))
//         floor = Math.min(floor,
//           dfs(str.slice(i) + str.slice(0, i), key_index + 1) + i + 1)
//       }
//       const j = Len - i - 1
//       if (str[j] === key[key_index]) {
//         floor = Math.min(floor,
//           dfs(str.slice(j) + str.slice(0, j), key_index + 1) + i + 2)
//       }
//     }

//     map.set(path, floor)
//     return floor
//   }
//   //字符串自动更新--使12:00的字母始终为第一位
//   return dfs(ring, 0)
// };
// @lc code=end


// console.log(findRotateSteps("caotmcaataijjxi", "oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx"))

//copy--官方题解--dp
//dp[i][j]--i代表key的第i项，j表示与12:00字母相差第位置
//每次取状态转移第最小值

const getIdx = (str: string, v: number): number => str.codePointAt(v) as number - 97;

var findRotateSteps = function (ring: string, key: string) {
  const n = ring.length, m = key.length;
  const pos: number[][] = Array.from({ length: 26 }, () => [])
  for (let i = 0; i < n; ++i) {
    pos[getIdx(ring, i)].push(i);
  }
  const dp: number[][] = Array.from({ length: m }, () => Array.from({ length: n }, () => Infinity))
  for (const i of pos[getIdx(key, 0)]) {
    dp[0][i] = Math.min(i, n - i) + 1;
  }
  for (let i = 1; i < m; ++i) {
    for (const j of pos[getIdx(key, i)]) {
      for (const k of pos[getIdx(key, i - 1)]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1);
      }
    }
  }
  return dp[m - 1].reduce((pre, cur) => Math.min(pre, cur), Number.MAX_SAFE_INTEGER);
};


//17
console.log(findRotateSteps("ababcab", "acbaacba"))

//6
console.log(findRotateSteps("abcde", "ade"))

//4
console.log(findRotateSteps("godding", "gd"))
