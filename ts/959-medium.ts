/*
 * @lc app=leetcode.cn id=959 lang=typescript
 *
 * [959] 由斜杠划分区域
 */

//参考--查并集
//N*N是关键，决定了正方形，也确定每一个小正方形对切割方式

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
  constructor(n: number) {
    this.parents = {};
    this.ranks = {}
    this.count = n
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
    this.count--
    return true
  }
}

function regionsBySlashes(grid: string[]): number {
  const Len = grid.length
  const size = Len * Len * 4
  const UF = new UnionFind(size)
  for (let i = 0; i < Len; i++) {
    for (let j = 0; j < Len; j++) {
      const index = (i * Len + j) * 4
      const char = grid[i][j]
      if (char === '/') {
        UF.merge(index, index + 3)
        UF.merge(index + 1, index + 2)
      } else if (char === '\\') {
        UF.merge(index, index + 1)
        UF.merge(index + 2, index + 3)
      } else {
        UF.merge(index, index + 1)
        UF.merge(index + 1, index + 2)
        UF.merge(index + 2, index + 3)
      }
      if (j + 1 < Len) {
        UF.merge(index + 1, 4 * (i * Len + j + 1) + 3);
      }
      if (i + 1 < Len) {
        UF.merge(index + 2, 4 * ((i + 1) * Len + j));
      }
    }
  }
  return UF.count
};
// @lc code=end

console.log(regionsBySlashes(
  [
    " /",
    "/ "
  ]
))