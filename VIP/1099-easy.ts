//自己--排序+双指针

function twoSumLessThanK(nums: number[], k: number): number {

  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  let res = -1
  while (left < right) {
    const temp = nums[left] + nums[right]
    if (temp >= k) {
      right--
    } else {
      res = Math.max(res, temp)
      left++
    }
  }
  return res
};

console.log(twoSumLessThanK([358, 898, 450, 732, 672, 672, 256, 542, 320, 573, 423, 543, 591, 280, 399, 923, 920, 254, 135, 952, 115, 536, 143, 896, 411, 722, 815, 635, 353, 486, 127, 146, 974, 495, 229, 21, 733, 918, 314, 670, 671, 537, 533, 716, 140, 599, 758, 777, 185, 549]
  , 1800))