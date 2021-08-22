//参考--最长最长公共子序列的变体

function minOperations(target: number[], arr: number[]): number {
  const n = target.length, m = arr.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    map.set(target[i], i)
  }
  const list = []
  for (let i = 0; i < m; i++) {
    let x = arr[i]
    if (map.has(x)) {
      list.push(map.get(x))
    }
  }
  let len = list.length
  const f = Array.from({ length: len }, () => 0),
    g = Array.from({ length: len + 1 }, () => Infinity)
  let max = 0
  for (let i = 0; i < len; i++) {
    let left = 0, right = len
    while (left < right) {
      const mid = (left + right + 1) >> 1
      if (g[mid] < list[i]) {
        left = mid
      } else {
        right = mid - 1
      }
    }
    let clen = right + 1
    f[i] = clen
    g[clen] = Math.min(g[clen], list[i])
    max = Math.max(max, clen)
  }
  return n - max
};

minOperations([16, 7, 20, 11, 15, 13, 10, 14, 6, 8]
  , [11, 14, 15, 7, 5, 5, 6, 10, 11, 6])