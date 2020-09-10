//自己--重做--双指针--记录两端最大值的最小值
function trap(height: number[]): number {
  let res = 0
  let left = 0
  let right = height.length - 1
  while (height[left] === 0) {
    left++
  }
  while (height[right] === 0) {
    right--
  }
  let pillar = 0
  while (left < right) {
    const num1 = height[left]
    const num2 = height[right]
    pillar = Math.max(pillar, Math.min(num1, num2))
    if (num1 <= num2) {
      res += pillar - num1
      left++
    } else {
      res += pillar - num2
      right--
    }

  }

  return res
}
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])