/*
 * @lc app=leetcode.cn id=406 lang=typescript
 *
 * [406] 根据身高重建队列
 */

//参考--官方题解--贪心

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return b[0] - a[0]
  })
  let res: number[][] = []

  for (const item of people) { 
    res.splice(item[1], 0, item)
  }
  return res
};
reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])
// @lc code=end

