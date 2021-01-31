/*
 * @lc app=leetcode.cn id=1631 lang=typescript
 *
 * [1631] 最小体力消耗路径
 */

//参考--并查集/Kruskal最小生成树

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
    this.parents = Array.from({ length: n }, (v, k) => k);
    this.ranks = Array.from({ length: n }, (v, k) => 1);
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

function minimumEffortPath(heights: number[][]): number {
  const Rows = heights.length, Cols = heights[0].length

  const edges: number[][] = []
  for (let i = 0; i < Rows; i++) {
    for (let j = 0; j < Cols; j++) {
      const id = i * Cols + j
      if (i < Rows - 1) {
        edges.push([id, id + Cols, Math.abs(heights[i][j] - heights[i + 1][j])])
      }
      if (j < Cols - 1) {
        edges.push([id, id + 1, Math.abs(heights[i][j] - heights[i][j + 1])])
      }
    }
  }
  edges.sort((a, b) => a[2] - b[2])
  let res = 0
  const UF = new UnionFind(Rows * Cols)
  for (const [s, e, dis] of edges) {
    if (UF.find(s) !== UF.find(e)) {
      UF.merge(s, e)
      res = dis
    }
    if (UF.find(0) === UF.find(Rows * Cols - 1)) break
  }

  return res
};
// @lc code=end
//1
console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]]))
//5
console.log(minimumEffortPath([[4, 3, 4, 10, 5, 5, 9, 2], [10, 8, 2, 10, 9, 7, 5, 6], [5, 8, 10, 10, 10, 7, 4, 2], [5, 1, 3, 1, 1, 3, 1, 9], [6, 4, 10, 6, 10, 9, 4, 6]]))
//0
console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]))
//2
console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]))