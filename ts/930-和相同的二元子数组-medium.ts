/*
 * @lc app=leetcode.cn id=930 lang=typescript
 *
 * [930] 和相同的二元子数组
 */
//参考--atMost-前缀和母题5
// @lc code=start
function numSubarraysWithSum(A: number[], S: number): number {
  return atMost(A, S) - atMost(A, S - 1)
}
function atMost(A: number[], S: number): number {
  if (S < 0) return 0
  let res = 0
  let left = 0
  for (let i = 0; i < A.length; i++) {
    S -= A[i]
    while (S < 0) {
      S += A[left++]
    }
    res += i - left + 1
  }
  return res
}
// @lc code=end

//题目中的二元数组：只有0和1的数组，二进制数组
//题目中的子数组是连续数组

function _numSubarraysWithSum(nums: number[], goal: number): number {
  let sum = 0
  const map = new Map()
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
    sum += nums[i]
    res += map.get(sum - goal) || 0
  }

  return res
};


console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))