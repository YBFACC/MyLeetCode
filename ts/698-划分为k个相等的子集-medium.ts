/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
//参考--DFS-剪枝
function canPartitionKSubsets(nums: number[], k: number): boolean {
  nums.sort((a, b) => a - b)
  let all = nums.reduce((pre, curr) => pre + curr, 0)
  const targrt = all / k
  const Len = nums.length
  if (all % k !== 0 || nums[Len - 1] > targrt) return false
  const set = new Set()

  function dfs(_k: number, _target: number, index: number): boolean {
    if (_k === 0) return true

    for (let i = index; i < Len; i++) {
      //去重剪枝
      if (i > 0 && nums[i] == nums[i - 1] && !set.has(i - 1)) continue;

      if (set.has(i)) continue
      set.add(i)
      if (_target - nums[i] === 0 && dfs(_k - 1, targrt, 0)) return true
      else if (_target - nums[i] >= nums[i] && dfs(_k, _target - nums[i], i + 1)) return true

      set.delete(i)
    }

    return false
  }

  return dfs(k - 1, targrt, 0)
};



// @lc code=end

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))