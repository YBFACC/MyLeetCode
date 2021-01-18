/*
 * @lc app=leetcode.cn id=947 lang=typescript
 *
 * [947] 移除最多的同行或同列石头
 */


// @lc code=start

//参考--查并集-合并x,y
//查并集得到连通图的数量
//res=总数-连通图的数量

interface obj {
  [index: number]: number
}

class UnionFind {
  parents: obj
  count = 0
  constructor() {
    this.parents = {};
  }
  init(x: number) {
    if (this.parents[x] === undefined) {
      this.parents[x] = x;
      this.count++;
    }
  }
  find(x: number) {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }
  merge(x: number, y: number) {
    this.init(x); this.init(y);
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return;

    this.parents[rootY] = rootX
    this.count--;
  }
  getCount() {
    return this.count;
  }
}

function removeStones(stones: number[][]): number {
  const UF = new UnionFind()
  for (const [s, e] of stones) {
    UF.merge(s, e + 10000)
  }
  return stones.length - UF.getCount()
};
// @lc code=end

console.log(removeStones([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]))