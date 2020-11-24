/*
 * @lc app=leetcode.cn id=327 lang=typescript
 *
 * [327] 区间和的个数
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考--树状数组+离散化

// @lc code=start
function countRangeSum(nums: number[], lower: number, upper: number): number {
  // 计算前缀和数组
  const prefixSum = Array(nums.length + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }
  // 准备离散化的数据
  let mapValues = []
  for (const sum of prefixSum) {
    // sum - lower, sum - upper 也要进行处理
    mapValues.push(sum, sum - lower, sum - upper)
  }

  mapValues = [...new Set(mapValues)].sort()
  const valueMap = new Map()
  for (let i = 0; i < mapValues.length; i++) {
    valueMap.set(mapValues[i], i + 1)
  }


  // 准备工作结束，正式开始
  const bit = new SegmentTree(valueMap.size + 1)
  let result = 0
  for (let i = 0; i < prefixSum.length; i++) {
    const sum = prefixSum[i]
    if (i !== 0) {
      result += bit.query(valueMap.get(sum - lower))
      // 这里要 -1，因为要求的是 [a, b] 的和，所以我们要的是 [0, b] - [0, a)
      result -= bit.query(valueMap.get(sum - upper) - 1)
    }
    bit.update(valueMap.get(sum) , 1)
  }
  return result
};

// @lc code=end

countRangeSum([0], 0, 0)

countRangeSum([-2, 5, -1], -2, 2)