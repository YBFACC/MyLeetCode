//参考--完美规避了2个同一个数组中选择

function maxDistance(arrays: number[][]): number {
  let big = arrays[0][arrays[0].length - 1]
  let small = arrays[0][0]
  let ans = 0
  for (let i = 1; i < arrays.length; i++) {
    const item = arrays[i]
    ans = Math.max(ans, Math.abs(big - item[0]), Math.abs(item[item.length - 1] - small))
    big = Math.max(big, item[item.length - 1])
    small = Math.min(small, item[0])
  }

  return ans
};

maxDistance([[1, 2, 3],
[4, 5],
[1, 2, 3]])