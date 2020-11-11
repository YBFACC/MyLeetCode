/*
 * @lc app=leetcode.cn id=514 lang=typescript
 *
 * [514] 自由之路
 */

//提示--深搜记忆化模版--旋转字符串

// @lc code=start
function findRotateSteps(ring: string, key: string): number {
  const map = new Map()
  const Len = ring.length
  const endIndex = key.length

  const dfs = function (str: string, key_index: number): number {
    //记忆化--剪枝
    const path = `${str}-${key_index}`
    if (key_index === endIndex) return 0
    if (map.has(path)) return map.get(path)

    let floor = Infinity
    //i代表从0开始的距离
    //正向反向--转字符串长度一半即可
    for (let i = 0; i <= Len - i - 1; i++) {
      if (str[i] === key[key_index]) {
        //console.log(str.slice(i) + str.slice(0, i))
        floor = Math.min(floor,
          dfs(str.slice(i) + str.slice(0, i), key_index + 1) + i + 1)
      }
      const j = Len - i - 1
      if (str[j] === key[key_index]) {
        floor = Math.min(floor,
          dfs(str.slice(j) + str.slice(0, j), key_index + 1) + i + 2)
      }
    }

    map.set(path, floor)
    return floor
  }
  //字符串自动更新--使12:00的字母始终为第一位
  return dfs(ring, 0)
};
// @lc code=end


// console.log(findRotateSteps("caotmcaataijjxi", "oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx"))

//17
console.log(findRotateSteps("ababcab", "acbaacba"))

//6
console.log(findRotateSteps("abcde", "ade"))

//4
console.log(findRotateSteps("godding", "gd"))