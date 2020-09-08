//看提示--滑动窗口法--set+map
function shortestSeq(big: number[], small: number[]): number[] {
  const Len = big.length
  const set_small = new Set(small)
  const set = new Set()
  const res = [0, big.length]
  let left = 0
  let right = 0
  const map = new Map()
  while (right < Len) {
    if (set_small.has(big[right])) {
      set.add(big[right])
      map.set(big[right], map.has(big[right]) ? map.get(big[right]) + 1 : 1)
    }
    while (set.size === set_small.size && left <= right) {
      if (res[1] - res[0] > right - left) {
        res[0] = left
        res[1] = right
      }
      const curr = big[left]
      if (set.has(curr)) {
        const num = map.get(curr)
        if (num === 1) {
          set.delete(curr)
        }
        map.set(curr, num - 1)
      }
      left++
    }
    right++
  }
  if (res[0] === 0 && res[1] === big.length) return []
  return res
};
shortestSeq([7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7], [1, 5, 9])