/*
 * @lc app=leetcode.cn id=909 lang=typescript
 *
 * [909] 蛇梯棋
 */

//参考--BFS
//蛇形排列的棋盘恶心

// @lc code=start
function snakesAndLadders(board: number[][]): number {
  const n = board.length
  const end = n * n
  const set = new Set()

  let res = 0
  let bfs = [1]
  while (bfs.length > 0) {
    res++
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift() as number
      for (let i = 1; i < 7; i++) {
        let next = curr + i
        if (next > end) break

        const rc = id2rc(next, n);
        if (board[rc[0]][rc[1]] > 0) {
          next = board[rc[0]][rc[1]];
        }

        if (next === end) {
          return res++
        }
        if (!set.has(next)) {
          set.add(next)
          bfs.push(next)
        }
      }
      size--
    }
  }

  return -1
};

const id2rc = (id: number, n: number) => {
  let r = Math.floor((id - 1) / n), c = (id - 1) % n;
  if (r % 2 === 1) {
    c = n - 1 - c;
  }
  return [n - 1 - r, c];
}

// @lc code=end

