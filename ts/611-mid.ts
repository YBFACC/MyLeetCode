//参考--排序+双指针
//两边大于第三边
//a+b>c,a+b>c,b+c>a
//a<b<c,固定最大边
//只用满足a+b<c即可

function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let res = 0
  const Len = nums.length

  for (let i = Len - 1; i >= 2; i--) {
    let left = 0, right = i - 1, three = nums[i]
    while (left < right) {
      if (nums[left] + nums[right] > three) {
        res += right - left
        right--
      } else {
        left++
      }
    }
  }

  return res
};