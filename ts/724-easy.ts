/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心索引
 */

//自己--前缀和

// @lc code=start
function pivotIndex(nums: number[]): number {
  let all = 0
  for (const item of nums) {
    all += item
  }
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    const right=all-left-nums[i]
    if(left===right)return i
    left+=nums[i]
  }
  return -1
};
// @lc code=end

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))