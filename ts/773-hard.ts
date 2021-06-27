/*
 * @lc app=leetcode.cn id=773 lang=typescript
 *
 * [773] 滑动谜题
 */

//参考--广搜+去重
//可以使用 A*算法

// @lc code=start
function slidingPuzzle(board: number[][]): number {
  //这是index序号相邻，不是答案的相邻
  const neighbors = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
  const sb = [...board[0], ...board[1]];

  const initial = sb.join('');
  if ("123450" === initial) {
    return 0;
  }

  let step = 0
  const bfs = []
  bfs.push(initial)
  const seen = new Set();
  seen.add(initial);

  const get = (status: string) => {
    const ret = []
    const array = Array.from(status)
    const x = status.indexOf('0')
    for (const y of neighbors[x]) {
      [array[x], array[y]] = [array[y], array[x]];
      ret.push(array.join(''));
      [array[x], array[y]] = [array[y], array[x]];
    }
    return ret
  }

  while (bfs.length > 0) {
    step++
    let size = bfs.length
    while (size > 0) {
      let status = bfs.shift() as string
      for (const nextStatus of get(status)) {
        if (!seen.has(nextStatus)) {
          if ("123450" === nextStatus) {
            return step;
          }
          bfs.push(nextStatus);
          seen.add(nextStatus);
        }
      }

      size--
    }
  }

  return -1
};
// @lc code=end

console.log(slidingPuzzle([[3, 2, 4], [1, 5, 0]]))