/*
 * @Author: yubingfeng
 * @Date: 2021-10-06 12:02:34
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-08 00:04:40
 * @Description: 自己--遍历
 */
function thirdMax(nums: number[]): number {
  const min = 0 - 2 ** 31 - 1
  let first = min, sec = min - 1, third = min - 2
  for (const num of nums) {
    if (num === first || num === sec || num == third) continue
    if (num > first) {
      third = sec
      sec = first
      first = num
    } else if (num > sec) {
      third = sec
      sec = num
    } else if (num > third) {
      third = num
    }
  }
  if (sec <= min) return first
  if (third <= min) return first
  return third
};