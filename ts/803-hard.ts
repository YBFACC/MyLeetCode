/*
 * @lc app=leetcode.cn id=803 lang=typescript
 *
 * [803] 打砖块
 */

//参考--查并集
//逆向合并--合并一次统计是否有新的砖块变化

// @lc code=start

interface obj {
  [index: number]: number
}

class UnionFind {
  parents: obj
  //减少搜索深度
  ranks: obj
  //统计联通分量
  count: number
  size: number[]
  constructor(n: number) {
    this.parents = new Array(n).fill(0).map((value, key) => { return key });
    this.ranks = {}
    this.count = n
    this.size = Array.from({ length: n }, () => 1)
  }
  init(x: number) {
    if (this.parents[x] === undefined) {
      this.parents[x] = x;
      this.ranks[x] = 1
    }
  }
  find(x: number) {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }
  merge(x: number, y: number): boolean {
    this.init(x); this.init(y);
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return false;
    if (this.ranks[rootX] < this.ranks[rootY]) {
      [rootX, rootY] = [rootY, rootX]
    }
    this.ranks[rootX] += this.ranks[rootY]
    this.parents[rootY] = rootX
    this.size[rootX] += this.size[rootY]
    return true
  }
  getSize(x: number) {
    const root = this.find(x);
    return this.size[root];
  }
}

function hitBricks(grid: number[][], hits: number[][]): number[] {
  const Row = grid.length, Col = grid[0].length
  const Ways = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const Size = Row * Col
  const copy: number[][] = []
  const res = Array.from({ length: hits.length }, () => 0)
  const UF = new UnionFind(Size + 1)
  for (const col of grid) {
    copy.push(col.slice())
  }
  for (const [x, y] of hits) {
    copy[x][y] = 0
  }
  for (let j = 0; j < Col; j++) {
    if (copy[0][j] === 1) {
      UF.merge(getIndex(0, j, Col), Size)
    }
  }

  for (let i = 1; i < Row; i++) {
    for (let j = 0; j < Col; j++) {
      if (copy[i][j] === 1) {
        if (copy[i - 1][j]) {
          UF.merge(getIndex(i - 1, j, Col), getIndex(i, j, Col))
        }
        if (j > 0 && copy[i][j - 1]) {
          UF.merge(getIndex(i, j - 1, Col), getIndex(i, j, Col))
        }
      }
    }
  }

  for (let i = hits.length - 1; i >= 0; i--) {
    const [x, y] = hits[i]
    if (grid[x][y] === 0) continue
    const origin = UF.getSize(Size)
    if (x == 0) {
      UF.merge(y, Size)
    }
    for (const [_x, _y] of Ways) {
      const newX = x + _x
      const newY = y + _y
      if (newX >= 0 && newX < Row && newY >= 0 && newY < Col &&
        copy[newX][newY] === 1) {
        UF.merge(getIndex(x, y, Col), getIndex(newX, newY, Col))
      }
    }
    const curr = UF.getSize(Size)
    res[i] = Math.max(0, curr - origin - 1)
    copy[x][y] = 1
  }

  return res
};

function getIndex(x: number, y: number, Col: number): number {
  return x * Col + y
}
// @lc code=end

hitBricks([[1], [1], [1], [1], [1]],
  [[3, 0], [4, 0], [1, 0], [2, 0], [0, 0]])

hitBricks([[1, 0, 0, 0], [1, 1, 0, 0]], [[1, 1], [1, 0]])

hitBricks([[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0]])