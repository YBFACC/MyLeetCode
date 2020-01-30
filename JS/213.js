/**
 * 参考---198的升级版--性能棒
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  let len = nums.length
  var dp1 = Array.from(len)
  dp1[0] = 0
  dp1[1] = nums[0]
  for (let i = 2; i < nums.length; i++) {
    dp1[i] = Math.max(dp1[i - 2] + nums[i - 1], dp1[i - 1])
  }

  var dp2 = Array.from(len)
  dp2[0] = 0
  dp2[1] = nums[1]
  for (let i = 2; i < nums.length; i++) {
    dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1])
  }

  return dp1[len - 1] >= dp2[len - 1] ? dp1[len - 1] : dp2[len - 1]
}
console.log(rob([]))
