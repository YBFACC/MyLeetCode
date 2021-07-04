//自己--广搜+有向边

function numWays(n: number, relation: number[][], k: number): number {
  const map = new Map()
  for (const [start, end] of relation) {
    if (!map.has(start)) {
      map.set(start, [])
    }
    map.get(start)!.push(end)
  }

  let bfs = [0]
  while (k-- > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let curr = bfs.shift() as number
      map.has(curr) && bfs.push(...map.get(curr))
    }
  }

  let res = 0, target = n - 1
  for (const item of bfs) {
    res += item === target ? 1 : 0
  }

  return res
};