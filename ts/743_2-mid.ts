class LinkedEdge {
  head: number[]
  to: number[]
  next: number[]
  vals: number[]
  index: number
  constructor(n: number) {
    this.head = Array.from({ length: n }, () => -1)
    this.to = Array.from({ length: n }, () => -1)
    this.next = Array.from({ length: n }, () => -1)
    this.vals = Array.from({ length: n }, () => -1)
    this.index = -1
  }

  add(a: number, b: number, c: number): void {
    this.next[++this.index] = this.head[a]
    this.to[this.index] = b
    this.vals[this.index] = c
    this.head[a] = this.index
  }

  search(target: number): number[][] {
    const temp: number[][] = []
    for (let i = this.head[target]; i != -1; i = this.next[i]) {
      temp.push([target, this.to[i], this.vals[i]])
    }
    return temp
  }
}

function networkDelayTime(times: number[][], n: number, k: number): number {
  const edge = new LinkedEdge(6001)
  const list = Array.from({ length: n + 1 }, () => Infinity)
  for (const [u, v, w] of times) {
    edge.add(u, v, w)
  }
  list[k]=0
  let bfs = [k]
  const visited = new Set()
  visited.add(k)
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let curr = bfs.shift() as number
      const floor = edge.search(curr)
      if (floor.length === 0) continue
      visited.add(curr)

      for (const [u, v, w] of floor) {
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

networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)