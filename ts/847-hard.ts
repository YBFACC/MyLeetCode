//参考--状压+BFS

function shortestPathLength(graph: number[][]): number {
  const Len = graph.length
  const all = 1 << Len
  const dist = Array.from({ length: all }, () => Array.from({ length: Len }, () => Infinity))
  let bfs: number[][] = []

  for (let i = 0; i < Len; i++) {
    dist[1 << i][i] = 0
    bfs.push([1 << i, i])
  }


  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let [state, u] = bfs.shift() as number[]
      if (state === all - 1) return dist[state][u]
      for (const i of graph[u]) {
        if (dist[state | (1 << i)][i] === Infinity) {
          dist[state | (1 << i)][i] = dist[state][u] + 1
          bfs.push([state | (1 << i), i])
        }
      }
    }
  }
  return -1
};