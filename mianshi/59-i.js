/**
 * 自己--双端队列--性能一般
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return []
  let pre = 1
  let list = [nums[0]]
  function func(num) {
    while (num > list[list.length - 1]) {
      list.pop()
      if (list.length === 0) break
    }
    list.push(num)
  }
  while (k > 1) {
    if (nums[pre] <= list[list.length - 1]) {
      list.push(nums[pre])
    } else {
      func(nums[pre])
    }
    pre++
    k--
  }

  let curr = 0
  let res = [list[0]]
  while (pre < nums.length) {
    if (list[0] === nums[curr]) {
      list.shift()
    }
    if (nums[pre] <= list[list.length - 1]) {
      list.push(nums[pre])
    } else {
      func(nums[pre])
    }
    pre++
    curr++
    res.push(list[0])
  }
  return res
}

maxSlidingWindow([7, 2, 4], 2)
