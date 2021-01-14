/*
 * @lc app=leetcode.cn id=684 lang=typescript
 *
 * [684] 冗余连接
 */

//自己--重做--查并集

// @lc code=start
class UnionFind {
  parent: number[]
  constructor(n: number) {
    this.parent = []
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(index: number) {
    if (this.parent[index] != index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }

  merge(x: number, y: number) {
    this.parent[this.find(x)] = this.find(y);
  }
}
function findRedundantConnection(edges: number[][]): number[] {
  const Len = edges.length
  const UF = new UnionFind(Len)
  let res: number[] = []
  for (const [s, e] of edges) {
    const root_s = UF.find(s)
    const root_e = UF.find(e)
    if (root_e !== root_s) {
      UF.merge(root_s, root_e)
    } else {
      res = [s, e]
    }
  }
  return res
};
// @lc code=end

findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])