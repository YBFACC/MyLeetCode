/*
 * @lc app=leetcode.cn id=678 lang=typescript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
// function checkValidString(s: string): boolean {
//   const Len = s.length
//   if (Len === 0) return true
//   const dp = Array.from({ length: Len }, () => Array.from({ length: Len }, () => 0))

//   for (let length = 0; length < Len; length++) {
//     for (let i = 0; i + length < Len; i++) {
//       const j = i + length
//       if (length === 0) {

//       }

//       for (let j = 0; j < Len; j++) { }
//     }
//   }

//   return false
// };


//参考--DFS-剪枝
function checkValidString(s: string): boolean {
  const Len = s.length
  let res = false
  const memo = Array.from({ length: Len + 1 }, () => Array.from({ length: Len + 1 }, () => 0))
  const dfs = function (index: number, prefix: number): boolean {
    if (index === Len && prefix === 0) {
      res = true
      return true
    }
    if (prefix < 0) return false

    if (memo[index][prefix] !== 0) return memo[index][prefix] === 1

    let floor = false
    const char = s[index]
    if (char === '(') {
      floor = dfs(index + 1, prefix + 1)
    }
    if (char === ')') {
      floor = dfs(index + 1, prefix - 1)
    }
    if (char === '*') {
      floor = dfs(index + 1, prefix + 1) || dfs(index + 1, prefix - 1) || dfs(index + 1, prefix)
    }
    memo[index][prefix] = floor ? 1 : -1
    return floor
  }
  dfs(0, 0)
  return res
};

// @lc code=end

console.log(checkValidString("(*)"))