/*
 * @lc app=leetcode.cn id=743 lang=typescript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
//自己--练习Dijkstra算法
function networkDelayTime(times: number[][], N: number, K: number): number {
  const n = N + 1
  const map: number[][] = Array.from({ length: n }, (v, k1) =>
    Array.from({ length: n }, (v, k2) => (k1 === k2 ? 0 : Infinity))
  )
  for (const edge of times) {
    const [from, to, dic] = edge
    map[from][to] = dic
  }
  const dist = Array.from({ length: n }, () => Infinity)
  for (let i = 1; i < n; i++) {
    dist[i] = map[K][i]
  }
  const set = new Set()
  set.add(K)
  dist[K] = 0

  for (let j = 0; j < n - 1; j++) {
    let MIN = Infinity
    let start = K
    for (let k = 1; k <= n; k++) {
      if (!set.has(k) && dist[k] < MIN) {
        start = k
        MIN = dist[k]
      }
    }
    set.add(start)
    for (let k = 1; k <= n; k++) {
      if (!set.has(k) && dist[k] > dist[start] + map[start][k]) {
        dist[k] = dist[start] + map[start][k]
      }
    }
  }

  let max = -Infinity
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] === Infinity) {
      return -1
    } else {
      max = Math.max(max, dist[i])
    }
  }

  return max
};
// @lc code=end

networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)