//参考--将和为目标值的子数组放入数组--暴力查找最小值N^2
function minSumOfLengths(arr: number[], target: number): number {
  const memo = []
  let left = 0
  let right = 0
  let count = 0
  while (right < arr.length) {
    count += arr[right]
    right++
    while (left < right && count >= target) {
      if (count === target) memo.push([right - left, left])
      count -= arr[left]
      left++
    }
  }
  let min = Infinity
  memo.sort((a, b) => a[0] - b[0])
  const Len = memo.length
  for (let i = 0; i < Len - 1; i++) {
    for (let j = i + 1; j < Len; j++) {
      if (memo[i][1] < memo[j][1] && memo[i][1] + memo[i][0] > memo[j][1]) continue
      if (memo[j][1] < memo[i][1] && memo[j][1] + memo[j][0] > memo[i][1]) continue
      min = Math.min(min, memo[i][0] + memo[j][0])
      break
    }
  }
  return min === Infinity ? -1 : min
};