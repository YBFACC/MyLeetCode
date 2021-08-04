//自己--BFS

function networkDelayTime(times: number[][], n: number, k: number): number {
  const list = Array.from({ length: n + 1 }, () => Infinity)
  const map: Map<number, number[][]> = new Map()
  for (const [u, v, w] of times) {
    if (!map.has(u)) {
      map.set(u, [])
    }
    map.get(u)!.push([v, w])
  }
  list[k] = 0
  let bfs = [k]
  const visited = new Set()
  visited.add(k)
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let u = bfs.shift() as number
      if (!map.has(u)) continue
      visited.add(u)
      const v_w = map.get(u) as number[][]
      for (const [v, w] of v_w) {
        const cost = list[u] + w
        if (cost < list[v]) {
          list[v] = cost
          bfs.push(v)
        }
      }
    }
  }

  let res = -1
  for (let i = 1; i <= n; i++) {
    if (list[i] === Infinity) {
      return -1
    }
    res = Math.max(res, list[i])
  }

  return res
};

networkDelayTime([[4,2,76],[1,3,79],[3,1,81],[4,3,30],[2,1,47],[1,5,61],[1,4,99],[3,4,68],[3,5,46],[4,1,6],[5,4,7],[5,3,44],[4,5,19],[2,3,13],[3,2,18],[1,2,0],[5,1,25],[2,5,58],[2,4,77],[5,2,74]]
  ,5
  ,3
)