//参考--统计入度为0度节点
function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const graph: number[] = Array.from({ length: n }, () => 0)
  const res: number[] = []
  for (const [from, to] of edges) {
    graph[to]++
  }
  for (let i = 0; i < n; i++) {
    if (graph[i] === 0) {
      res.push(i)
    }
  }
  return res
};

findSmallestSetOfVertices(5, [[0, 1], [2, 1], [3, 1], [1, 4], [2, 4]])

findSmallestSetOfVertices(6, [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]])