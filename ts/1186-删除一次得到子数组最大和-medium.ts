/*
 * @lc app=leetcode.cn id=1186 lang=typescript
 *
 * [1186] 删除一次得到子数组最大和
 */


// @lc code=start
//参考--类似最大子数组之和
function maximumSum(arr: number[]): number {
  let res = arr[0]
  const Len = arr.length
  const no_del = arr.slice()
  const del = arr.slice()

  for (let i = 1; i < Len; i++) {
    no_del[i] = Math.max(arr[i], no_del[i - 1] + arr[i])
    del[i] = Math.max(no_del[i - 1], del[i - 1] + arr[i])

    res = Math.max(res, del[i], no_del[i])
  }

  return res
};
// @lc code=end

maximumSum([1, -2, 0, 3])