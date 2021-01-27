/*
 * @lc app=leetcode.cn id=1579 lang=typescript
 *
 * [1579] 保证图可完全遍历
 */

//自己--查并集
//检查联通分量--Alice和Bob必须都是1

//有type3的边，type1、2直接算进答案
//如果形成环优先保护type3的边，所以type3先合并

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

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  let Alice = new UnionFind(n)
  let Bob = new UnionFind(n)
  const set = new Set()

  let res = 0
  edges.sort((a, b) => b[0] - a[0])
  for (let i = 0; i < edges.length; i++) {
    const [type, start, end] = edges[i]
    const Path1 = `${start}_${end}`
    const Path2 = `${end}_${start}`
    if (type === 3) {
      let a = Alice.merge(start, end)
      let b = Bob.merge(start, end)
      if (!a && !b) res++

      set.add(Path1)
      set.add(Path2)
    } else {
      if (set.has(Path1) || set.has(Path2)) {
        res++
        continue
      }
      if (type === 1) {
        if (!Alice.merge(start, end)) res++
      } else if (type === 2) {
        if (!Bob.merge(start, end)) res++
      }
    }
  }

  if (Alice.count !== 1 || Bob.count !== 1) return -1

  return res
};
// @lc code=end

console.log(maxNumEdgesToRemove(13,
  [[1, 1, 2], [2, 2, 3], [2, 3, 4], [1, 3, 5], [3, 2, 6], [2, 3, 7], [3, 7, 8], [3, 2, 9], [2, 4, 10], [2, 9, 11], [1, 2, 12], [3, 4, 13], [2, 2, 7], [1, 1, 9], [1, 2, 13], [2, 7, 13], [3, 2, 3], [1, 7, 10], [2, 8, 11], [1, 2, 7], [2, 1, 9], [2, 2, 9], [1, 5, 6], [2, 4, 9], [1, 7, 8], [1, 4, 6], [1, 4, 9], [3, 7, 13], [2, 2, 8], [2, 2, 6], [1, 1, 10], [1, 1, 11], [2, 5, 10], [1, 2, 9], [2, 1, 2], [1, 3, 4], [3, 6, 8], [3, 6, 13], [1, 3, 8], [1, 1, 6], [3, 3, 9], [1, 2, 3], [1, 11, 13]]))

console.log(maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 3], [1, 2, 4], [1, 1, 2], [2, 3, 4]]))

console.log(maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 4], [2, 1, 4]]))

console.log(maxNumEdgesToRemove(4, [[3, 2, 3], [1, 1, 2], [2, 3, 4]]))