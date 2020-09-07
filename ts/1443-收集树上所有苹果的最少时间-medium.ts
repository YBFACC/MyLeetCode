/*
 * @lc app=leetcode.cn id=1443 lang=typescript
 *
 * [1443] 收集树上所有苹果的最少时间
 */

// @lc code=start
//参考--逆查并集-map记录to-from
//到根节点或者苹果结束循环
function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
  const map = new Map()
  const set = new Set()
  let res = 0
  for (const edge of edges) {
    const [from, to] = edge
    map.set(to, from)
  }
  for (let i = 0; i < hasApple.length; i++) {
    let curr = i
    if (hasApple[curr]) {
      while (curr !== 0) {
        if (!set.has(curr)) {
          res += 2
          set.add(curr)
          curr = map.get(curr)
        } else {
          break
        }
      }
    }
  }
  return res
};
// @lc code=end

minTime(4,
  [[0, 1], [1, 2], [0, 3]],
  [true, true, true, true])
