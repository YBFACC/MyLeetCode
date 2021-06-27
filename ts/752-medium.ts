/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

//自己--BFS+去重

// @lc code=start
function openLock(deadends: string[], target: string): number {
  let bfs = [[0, 0, 0, 0]]
  let res = 0
  const set_deadend = new Set(deadends)
  const visited = new Set('0000')
  if (set_deadend.has('0000')) return -1
  if (target === '0000') return 0

  while (bfs.length > 0) {
    res++
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift() as number[]

      if (help(bfs, set_deadend, curr, target, visited)) return res

      size--
    }
  }
  return -1
};

function help(bfs: number[][], set_deadend: Set<string>, curr: number[], target: string, visited: Set<string>): boolean {
  if (visited.has(curr.join(''))) return false
  visited.add(curr.join(''))

  for (let i = 0; i < 4; i++) {
    const more = curr.slice()
    if (curr[i] === 9) {
      more[i] = 0
    } else {
      more[i] = curr[i] + 1
    }
    const less = curr.slice()
    if (curr[i] === 0) {
      less[i] = 9
    } else {
      less[i] = curr[i] - 1
    }
    const _more = more.join(''), _less = less.join('')
    if (_more === target || _less === target) return true
    if (!set_deadend.has(_more)) bfs.push(more)
    if (!set_deadend.has(_less)) bfs.push(less)
  }
  return false
}

// @lc code=end

//6
console.log(openLock(["0201", "0101", "0102", "1212", "2002"]
  , "0202"))