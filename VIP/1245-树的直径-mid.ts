//参考--树的直径
//从任意一点出发，找到距离最远的节点a
//从a找到距离最远的节点b
//a->b就是直径

//https://leetcode-cn.com/problems/tree-diameter/solution/shu-de-zhi-jing-liang-ci-dfsdi-yi-ci-zhao-dao-zhi-/
function treeDiameter(edges: number[][]): number {
  if (edges.length === 0) return 0
  const map = new Map()

  for (const [from, to] of edges) {
    map.has(from) ? null : map.set(from, [])
    map.has(to) ? null : map.set(to, [])
    map.get(from).push(to)
    map.get(to).push(from)
  }
  let father = Bfs(0, map)[0]

  return Bfs(father, map)[1]
};

function Bfs(start: number, map: Map<number, number[]>): number[] {
  let bfs = [start]
  const visited = new Map()
  visited.set(start, 0)

  let farthest = -1
  let target = -1

  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let curr = bfs.shift() as number
      let neighs = map.get(curr) as number[]
      let dist = visited.get(curr) + 1

      for (const neigh of neighs) {
        if (!visited.has(neigh)) {
          visited.set(neigh, dist)
          bfs.push(neigh)
          if (dist > farthest) {
            target = neigh
            farthest = dist
          }
        }
      }
    }
  }
  return [target, farthest]
}

console.log(treeDiameter([[0, 1], [0, 2]]))