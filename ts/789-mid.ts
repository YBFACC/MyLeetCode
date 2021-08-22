//提示--脑筋急转弯
//有阻碍者比吃豆人更快到达目标

function escapeGhosts(ghosts: number[][], target: number[]): boolean {
  const cost = Math.abs(target[0]) + Math.abs(target[1])
  for (const [x, y] of ghosts) {
    if (cost >= Math.abs(target[0] - x) + Math.abs(target[1] - y)) {
      return false
    }
  }
  return true
};
