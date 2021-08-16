//自己--回溯

function countArrangement(n: number): number {
  let res = 0
  const visited = new Set()
  const dfs = function (index: number) {
    if (index === n + 1) {
      res++
      return
    }
    for (let i = 1; i <= n; i++) {
      if (visited.has(i)) continue
      if (i % index === 0 || index % i === 0) {
        visited.add(i)
        dfs(index + 1)
        visited.delete(i)
      }
    }
  }
  dfs(1)
  return res
};

countArrangement(15)