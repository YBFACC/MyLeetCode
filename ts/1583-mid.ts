//参考--模拟+图
//看不懂题目

function unhappyFriends(n: number, preferences: number[][], pairs: number[][]): number {
  const order = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      order[i][preferences[i][j]] = j
    }
  }
  const match = Array.from({ length: n }, () => 0)
  for (const [p0, p1] of pairs) {
    match[p0] = p1
    match[p1] = p0
  }
  for (let x = 0; x < n; x++) {
    const y = match[x]
    const index = order[x][y]
    for (let i = 0; i < index; i++) {
      const u = preferences[x][i]
      const v = match[u]
      if (order[u][x] < order[u][v]) {
        res++
        break
      }
    }
  }

  return res
};

unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]])