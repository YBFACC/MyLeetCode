/*
 * @lc app=leetcode.cn id=1081 lang=typescript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
//自己--字典序-map计数-set去重
//因为每次字母都需要出现一次，在保持字典序都同时，如果stack都末尾的字母唯一，则不能再弹出。保持了局部最优
function smallestSubsequence(text: string): string {
  if (text.length === 0) return ''
  const set = new Set(text)//在第i项后面，还有什么字母出现
  const map = new Map()//统计每个字母出现的个数

  for (const item of text) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  let Deduplication = new Set()//用于去重stack中已有的字母
  let stack = []
  for (let i = 0; i < text.length; i++) {
    let num = map.get(text[i]) - 1
    if (num >= 0) {
      map.set(text[i], num)
      if (num === 0) set.delete(text[i])
    }
    if (Deduplication.has(text[i])) continue

    while (
      stack.length > 0 &&
      set.has(stack[stack.length - 1]) &&
      stack[stack.length - 1] > text[i]
    ) {
      Deduplication.delete(stack.pop())
    }
    Deduplication.add(text[i])
    stack.push(text[i])
  }

  return stack.join('')
}
// @lc code=end

smallestSubsequence('leetcode')
