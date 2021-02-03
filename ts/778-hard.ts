/*
 * @lc app=leetcode.cn id=778 lang=typescript
 *
 * [778] 水位上升的泳池中游泳
 */

//参考--查并集
//关键：grid[i][j] 是 [0, ..., N*N - 1] 的排列🚀


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

function swimInWater(grid: number[][]): number {
  const Rows = grid.length, Cols = grid[0].length
  const Ways = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  const Size = Rows * Cols
  const list = Array.from({ length: Size }, () => 0)
  const UF = new UnionFind(Size)
  for (let i = 0; i < Rows; i++) {
    for (let j = 0; j < Cols; j++) {
      list[grid[i][j]] = getIndex(i, j)
    }
  }
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    const x = Math.floor(item / Rows)
    const y = item % Rows
    for (const [_x, _y] of Ways) {
      const newX = _x + x
      const newY = _y + y
      if (inArea(newX, newY) && 
      //我没想到的点，合并时只合并比自己小的节点
      grid[newX][newY] <= i) {
        UF.merge(item, getIndex(newX, newY))
      }
      if (UF.find(0) === UF.find(Size - 1)) {
        return i
      }
    }
  }
  return -1

  function getIndex(x: number, y: number): number {
    return x * Rows + y
  }
  function inArea(x: number, y: number): boolean {
    return x >= 0 && x < Rows && y >= 0 && y < Cols
  }
};
// @lc code=end

console.log(swimInWater([[0, 2], [1, 3]]))
console.log(swimInWater([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]))