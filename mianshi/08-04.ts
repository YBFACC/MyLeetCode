//参考--回溯
//每一个值有选和不选两种状态
function subsets(nums: number[]): number[][] {
  const Len = nums.length
  let res: number[][] = []

  const dfs = function (temp: number[], index: number) {
    if (Len === index) {
      res.push(temp.slice())
      return
    }
    res.push(temp.slice())
    for (let i = index; i < Len; i++) {
      temp.push(nums[i])
      dfs(temp, i + 1)
      temp.pop()
    }
  }
  dfs([], 0)
  return res
};
subsets([1, 2, 3])