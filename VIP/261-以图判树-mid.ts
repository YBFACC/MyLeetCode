
//参考--bfs

function validTree(n: number, edges: number[][]): boolean {
  if (n != edges.length + 1) {
    return false;
  }
  const list: number[][] = Array.from({ length: n }, () => [])
  for (const [edge1, edge2] of edges) {
    list[edge1].push(edge2)
    list[edge2].push(edge1)
  }
  const all = new Set()
  all.add(0)
  let bfs = [0]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift() as number
      for (const item of list[curr]) {
        if (!all.has(item)) {
          all.add(item)
          bfs.push(item)
        }
      }
      size--
    }
  }

  return all.size === n
};

//false
console.log(validTree(5,
  [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]))

console.log(validTree(4
  , [[0, 1], [2, 3]]))