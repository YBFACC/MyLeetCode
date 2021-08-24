//自己--广搜/拓扑排序

function allPathsSourceTarget(graph: number[][]): number[][] {
  const res = []
  let bfs = [[0]]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      const curr = bfs.shift() as number[]
      const last = curr[curr.length - 1]
      if (last === graph.length - 1) {
        res.push(curr)
        continue
      }
      for (const item of graph[last]) {
        const floor = curr.slice()
        floor.push(item)
        bfs.push(floor)
      }
    }
  }
  return res
};
allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])
allPathsSourceTarget([[1, 2], [3], [3], []])