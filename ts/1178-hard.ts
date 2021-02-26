/*
 * @lc app=leetcode.cn id=1178 lang=typescript
 *
 * [1178] 猜字谜
 */
//提示--状态压缩+暴力枚举
//对word进行压缩：只需要知道word中有哪些字母，不需要数量
//puzzle的长度只有7，适合暴力枚举。求出每个可能的答案

// @lc code=start
function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
  const map = new Map()
  const res = []
  for (const word of words) {
    const key = arcii(word)
    map.set(key, map.has(key) ? map.get(key) + 1 : 1)
  }
  const dfs = function (origin: string, temp: string, index: number) {
    if (index > origin.length - 1) {
      const key = arcii(temp)
      count += map.has(key) ? map.get(key) : 0
      return
    }
    const floor = temp + origin[index]
    dfs(origin, temp, index + 1)
    dfs(origin, floor, index + 1)
    return
  }
  var count = 0
  for (const puzzle of puzzles) {
    count = 0
    dfs(puzzle, puzzle[0], 1)
    res.push(count)
  }

  return res
};
function arcii(str: string) {
  const list = new Int16Array(26)
  for (const s of str) {
    list[char(s)] = 1
  }
  return list.join('')
}
function char(char: string) {
  return char.charCodeAt(0) - 97
}
// @lc code=end

findNumOfValidWords(
  ["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
  ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"])