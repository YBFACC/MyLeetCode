/*
 * @lc app=leetcode.cn id=1438 lang=typescript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

//自己--滑动窗口+2个单调队列

// @lc code=start
function longestSubarray(nums: number[], limit: number): number {
  let res = 0
  let left = 0, right = 0
  const Len = nums.length
  const minQueue = new MonotoneQueue((a: number, b: number) => a > b),
    maxQueue = new MonotoneQueue((a: number, b: number) => a < b)

  while (right < Len) {
    maxQueue.insert(nums[right])
    minQueue.insert(nums[right])
    while (left < right && maxQueue.top() - minQueue.top() > limit) {
      maxQueue.pop(nums[left])
      minQueue.pop(nums[left])
      left++
    }
    res = Math.max(res, right - left + 1)
    right++
  }
  return res
};

class MonotoneQueue {
  list: number[]
  compare: Function
  constructor(fn: Function) {
    this.list = []
    this.compare = fn
  }
  insert(num: number) {
    const list = this.list
    while (list.length > 0 && this.compare(list[list.length - 1], num)) {
      list.pop()
    }
    list.push(num)
  }
  pop(num: number) {
    const list = this.list
    if (list.length > 0 && list[0] === num) {
      list.shift()
    }
  }
  top() {
    return this.list[0]
  }
}

// @lc code=end

console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0))

console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5))

console.log(longestSubarray([8, 2, 4, 7], 4))