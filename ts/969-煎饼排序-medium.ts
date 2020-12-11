/*
 * @lc app=leetcode.cn id=969 lang=typescript
 *
 * [969] 煎饼排序
 */

//参考--模拟题目流程

// @lc code=start

function pancakeSort(arr: number[]): number[] {
  const Len = arr.length
  const res = []
  let temp = arr.slice().sort((a, b) => a - b)

  for (let i = Len - 1, j = 0; i >= 0; i--, j++) {
    const index = arr.indexOf(temp[i])
    res.push(index + 1, Len - j)
    reverse(arr, index + 1)
    reverse(arr, Len - j)
  }

  return res
};

function reverse(arr: number[], k: number) {
  let l = 0, r = k - 1
  while (l < r) {
    ;[arr[l], arr[r]] = [arr[r], arr[l]]
    l++
    r--
  }
}
// @lc code=end

pancakeSort([3, 2, 4, 1])