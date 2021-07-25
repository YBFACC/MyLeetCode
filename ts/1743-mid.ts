//自己--建立双向图

function restoreArray(adjacentPairs: number[][]): number[] {
  const map = new Map()
  const count = new Map()
  for (const [from, to] of adjacentPairs) {
    if (!map.has(from)) {
      map.set(from, [])
    }
    if (!map.has(to)) {
      map.set(to, [])
    }
    map.get(from).push(to)
    map.get(to).push(from)
    count.set(from, count.has(from) ? count.get(from) + 1 : 1)
    count.set(to, count.has(to) ? count.get(to) + 1 : 1)
  }
  let start!: number;
  for (const [key, value] of count.entries()) {
    if (value === 1) {
      start = key
      break
    }
  }

  const res = []
  const visited = new Set()
  let bfs = [start]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let curr = bfs.shift() as number
      if (visited.has(curr)) continue
      res.push(curr)
      visited.add(curr)
      const list = map.get(curr) as number[]
      for (const item of list) {
        if (visited.has(item)) continue
        bfs.push(item)
      }
    }
  }

  return res
};

restoreArray([[100000, -100000]])
