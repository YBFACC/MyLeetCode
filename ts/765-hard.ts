/*
 * @lc app=leetcode.cn id=765 lang=typescript
 *
 * [765] 情侣牵手
 */

//参考官方题解--并查集
//2对->1
//3对->2对+2对=2

// @lc code=start
interface obj {
  [index: number]: number
}

class UnionFind {
  parents: obj
  //统计联通分量
  count: number
  constructor(n: number) {
    this.parents = Array.from({ length: n }, (v, k) => k)
    this.count = n
  }
  find(x: number) {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }
  merge(x: number, y: number): boolean {
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return false;
    this.parents[rootY] = rootX
    this.count--
    return true
  }
}

function minSwapsCouples(row: number[]): number {
  const Len = row.length
  const UF = new UnionFind(Len / 2)
  for (let i = 0; i < Len; i += 2) {
    UF.merge(
      (row[i] >> 1),
      (row[i + 1] >> 1)
    )
  }
  return Len / 2 - UF.count
};
// @lc code=end

console.log(minSwapsCouples([0, 2, 1, 3]))