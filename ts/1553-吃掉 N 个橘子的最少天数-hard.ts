//参考--常规dp爆内存--贪心
//尽可能向n/2和n/3靠近
function minDays(n: number): number {
  const map = new Map()
  map.set(0, 0)
  map.set(1, 1)
  const dfs = function (N: number) {
    if (map.has(N)) return map.get(N)
    let floor = Infinity

    floor = Math.min(floor, dfs(Math.floor(N / 2)) + 1 + N % 2)
    floor = Math.min(floor, dfs(Math.floor(N / 3)) + 1 + N % 3)

    map.set(N, floor)
    return floor
  }
  dfs(n)
  return map.get(n)
};
console.log(minDays(1))