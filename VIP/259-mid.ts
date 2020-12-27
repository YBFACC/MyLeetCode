
//提示--固定一个点+二分

function threeSumSmaller(nums: number[], target: number): number {
  if (nums.length < 3) return 0
  nums.sort((a, b) => a - b)
  let res = 0
  const Len = nums.length
  for (let i = 0; i < Len - 2; i++) {

    let left = i + 1
    let right = Len - 1

    while (left < right) {
      const temp = nums[i] + nums[left] + nums[right]
      if (temp >= target) {
        right--
      } else {
        res += right - left
        left++
      }
    }
  }
  return res
};

threeSumSmaller([-2, 0, 1, 3], 2)