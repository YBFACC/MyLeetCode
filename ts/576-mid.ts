//自己--记忆化深搜

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  const map = new Map()
  const dfs = function (step: number, x: number, y: number): number {
    const Path = `${x}_${y}_${step}`
    if (map.has(Path)) return map.get(Path)
    if (x < 0 || x >= m || y < 0 || y >= n) {
      return 1
    }
    if (step >= maxMove) return 0

    const i_1 = dfs(step + 1, x + 1, y)
    const i_2 = dfs(step + 1, x, y + 1)
    const i_3 = dfs(step + 1, x - 1, y)
    const i_4 = dfs(step + 1, x, y - 1)
    const all = (i_1 + i_2 + i_3 + i_4) % 1000000007
    map.set(Path, all)
    return all
  }

  return dfs(0, startRow, startColumn)
};
//1104
console.log(findPaths(2, 3, 8, 1, 0))

console.log(findPaths(1, 3, 3, 0, 1))
console.log(findPaths(2, 2, 2, 0, 0))