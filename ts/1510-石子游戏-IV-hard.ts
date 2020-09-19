//参考--false=>true的转化难想
//需要从大到小
function winnerSquareGame(n: number): boolean {
  const map = new Map()
  const dfs = function (temp: number): boolean {
    if (map.has(temp)) return map.get(temp)
    if (temp === 0) return false
    const max = Math.floor(Math.sqrt(temp))
    for (let i = max; i >= 1; i--) {
      if (!dfs(temp - i * i)) {
        map.set(temp, true)
        return true
      }
    }
    map.set(temp, false)
    return false
  }
  return dfs(n)
};


console.log(winnerSquareGame(92719))
