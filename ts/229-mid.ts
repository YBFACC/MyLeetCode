/*
 * @Author: yubingfeng
 * @Date: 2021-10-22 08:50:54
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-22 09:49:22
 * @Description: 参考--摩尔投票扩展
 */

function majorityElement(nums: number[]): number[] {
  let num1 = 0, num2 = 0
  let count1 = 0, count2 = 0
  for (const num of nums) {
    if (count1 > 0 && num1 === num) {
      count1++
    } else if (count2 > 0 && num2 === num) {
      count2++
    } else if (count1 === 0) {
      num1 = num
      count1 = 1
    } else if (count2 === 0) {
      num2 = num
      count2 = 1
    } else {
      count1--
      count2--
    }
  }
  let cnt1 = 0, cnt2 = 0
  for (const num of nums) {
    if (count1 > 0 && num === num1) cnt1++
    if (count2 > 0 && num === num2) cnt2++
  }
  const res = []
  if (count1 > 0 && cnt1 > Math.floor(nums.length / 3)) res.push(num1)
  if (count2 > 0 && cnt2 > Math.floor(nums.length / 3)) res.push(num2)

  return res
};


majorityElement([3, 3, 4])