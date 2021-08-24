//自己--Bellman Ford-邻接表

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const graph = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Infinity))
  for (const [from, to, price] of flights) {
    graph[from][to] = price
  }

  for (let i = 0; i < n; i++) {
    graph[i][i] = 0
  }

  let list = Array.from({ length: n }, () => Infinity)
  list[src] = 0
  while (k-- >= 0) {
    const clone = list.slice()
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        list[j] = Math.min(list[j], clone[i] + graph[i][j])
      }
    }
  }

  return list[dst] === Infinity ? -1 : list[dst]
};

console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
  , 0, 2, 0))

console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1))