/*
 * @lc app=leetcode.cn id=1489 lang=typescript
 *
 * [1489] 找到最小生成树里的关键边和伪关键边
 */

// @lc code=start

//参考--枚举+kruskal


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


function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
  const Len = edges.length
  const res: number[][] = [[], []]
  for (const [i, edge] of edges.entries()) {
    edge.push(i)
  }
  edges.sort((a, b) => a[2] - b[2])

  const UF = new UnionFind(n)
  let all = 0
  for (const [start, end, weight, index] of edges) {
    if (UF.merge(start, end)) {
      all += weight
    }
  }

  for (let i = 0; i < Len; i++) {

    let uf = new UnionFind(n)
    let v = 0

    for (let j = 0; j < Len; j++) {
      const [start, end, weight, index] = edges[j]
      if (i !== j && uf.merge(start, end)) {
        v += weight
      }
    }
    if (uf.count > 1 || (uf.count === 1 && v > all)) {
      res[0].push(edges[i][3])
      continue
    }

    uf = new UnionFind(n)
    uf.merge(edges[i][0], edges[i][1])
    v = edges[i][2]
    for (let j = 0; j < Len; j++) {
      const [start, end, weight, index] = edges[j]
      if (i !== j && uf.merge(start, end)) {
        v += weight
      }
    }
    if (v === all) {
      res[1].push(edges[i][3])
    }
  }
  return res
};
// @lc code=end


findCriticalAndPseudoCriticalEdges(6,
  [[0, 1, 1], [1, 2, 1], [0, 2, 1], [2, 3, 4], [3, 4, 2], [3, 5, 2], [4, 5, 2]]
)
