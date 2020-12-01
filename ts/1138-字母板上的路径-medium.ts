/*
 * @lc app=leetcode.cn id=1138 lang=typescript
 *
 * [1138] 字母板上的路径
 */

//参考--注意z的位置

// @lc code=start
interface obj {
  [index: string]: [number, number]
}
function alphabetBoardPath(target: string): string {
  let board: obj = {
    a: [0, 0],
    b: [0, 1],
    c: [0, 2],
    d: [0, 3],
    e: [0, 4],

    f: [1, 0],
    g: [1, 1],
    h: [1, 2],
    i: [1, 3],
    j: [1, 4],

    k: [2, 0],
    l: [2, 1],
    m: [2, 2],
    n: [2, 3],
    o: [2, 4],

    p: [3, 0],
    q: [3, 1],
    r: [3, 2],
    s: [3, 3],
    t: [3, 4],

    u: [4, 0],
    v: [4, 1],
    w: [4, 2],
    x: [4, 3],
    y: [4, 4],

    z: [5, 0],
  }
  let res = ''
  let list = [[0, 0]];
  target.split('').forEach(l => {
    list.push(board[l]);
  });

  for (let i = 1; i < list.length; i++) {
    res += helper(list[i - 1], list[i])
  }
  return res
};

function helper(start: number[], end: number[]): string {
  let temp = ''
  const xn = Math.abs(start[0] - end[0])
  const yn = Math.abs(start[1] - end[1])

  // 无需兼容z的情况是，只要限制z的方向，其他的可以随意，因而只要满足z的要求就可以了，
  //对于z来说其方向是有先后顺序的，即：z是起点 => 先上后右；z是终点 => 先左后下

  if (start[0] - end[0] > 0) {
    temp += 'U'.repeat(xn)
  }
  if (start[1] - end[1] < 0) {
    temp += 'R'.repeat(yn)
  }
  if (start[1] - end[1] > 0) {
    temp += 'L'.repeat(yn)
  }
  if (start[0] - end[0] < 0) {
    temp += 'D'.repeat(xn)
  }
  return temp + '!'
}

// @lc code=end

alphabetBoardPath('leet')