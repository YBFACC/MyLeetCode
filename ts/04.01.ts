//自己-图-BFS--去重
function findWhetherExistsPath(
  n: number,
  graph: number[][],
  start: number,
  target: number
): boolean {
  if (n === 0) return false
  const map = new Map()
  for (const item of graph) {
    let _start = item[0]
    let _end = item[1]
    if (!map.has(_start)) {
      map.set(_start, new Set())
    }
    map.get(_start).add(_end)
  }
  const queue = [start]
  const vistited = new Set()
  while (queue.length > 0) {
    let curr = queue.shift()
    if (vistited.has(curr)) continue
    vistited.add(curr)
    if (curr === target) return true
    map.has(curr) && queue.push(...map.get(curr))
  }
  return false
}

console.log(
  findWhetherExistsPath(
    12,
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [1, 10],
      [1, 11],
      [1, 4],
      [2, 4],
      [2, 6],
      [2, 9],
      [2, 10],
      [2, 4],
      [2, 5],
      [2, 10],
      [3, 7],
      [3, 7],
      [4, 5],
      [4, 11],
      [4, 11],
      [4, 10],
      [5, 7],
      [5, 10],
      [6, 8],
      [7, 11],
      [8, 10]
    ],
    2,
    3
  )
)
