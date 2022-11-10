/**
 * copy--BFS+状态压缩
 */
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
function shortestPathAllKeys(grid: string[]): number {
  const m = grid.length, n = grid[0].length;
  let sx = 0, sy = 0;
  //获得钥匙编号
  const keyToIndex = new Map();
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '@') {
        sx = i;
        sy = j;
      } else if ('a' <= grid[i][j] && grid[i][j] <= 'z') {
        if (!keyToIndex.has(grid[i][j])) {
          const idx = keyToIndex.size;
          keyToIndex.set(grid[i][j], idx);
        }
      }
    }
  }

  const queue: number[][] = [];
  const dist = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(1 << keyToIndex.size).fill(-1)));
  queue.push([sx, sy, 0]);
  dist[sx][sy][0] = 0;
  while (queue.length) {
    const arr = queue.shift() as number[];
    let x = arr[0], y = arr[1], mask = arr[2];
    //4方向遍历
    for (let i = 0; i < 4; ++i) {
      let nx = x + dirs[i][0];
      let ny = y + dirs[i][1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== '#') {
        //起点或空白格
        if (grid[nx][ny] === '.' || grid[nx][ny] === '@') {
          //当前状态从未使用
          if (dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            queue.push([nx, ny, mask]);
          }
        } else if ('a' <= grid[nx][ny] && grid[nx][ny] <= 'z') {
          //遇到钥匙
          const idx = keyToIndex.get(grid[nx][ny]);
          if (dist[nx][ny][mask | (1 << idx)] === -1) {
            dist[nx][ny][mask | (1 << idx)] = dist[x][y][mask] + 1;
            if ((mask | (1 << idx)) === (1 << keyToIndex.size) - 1) {
              //如果获得所有钥匙--结束
              return dist[nx][ny][mask | (1 << idx)];
            }
            queue.push([nx, ny, mask | (1 << idx)]);
          }
        } else {
          //遇到锁
          const idx = keyToIndex.get(grid[nx][ny].toLowerCase());
          //打开锁
          if ((mask & (1 << idx)) !== 0 && dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            queue.push([nx, ny, mask]);
          }
        }
      }
    }
  }

  return -1
};

shortestPathAllKeys(["@.a.#", "###.#", "b.A.B"])