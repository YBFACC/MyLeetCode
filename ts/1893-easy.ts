//自己--模拟
//可以用差分

function isCovered(ranges: number[][], left: number, right: number): boolean {
  const list = Array.from({ length: 51 }, () => 0)
  for (let [left, right] of ranges) {
    while (left <= right) {
      list[left++] = 1
    }
  }
  //树状数组只能优化查询结果
  for (let i = left; i <= right; i++) {
    if (list[i] === 0) return false
  }
  return true
};