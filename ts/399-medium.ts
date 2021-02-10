/*
 * @lc app=leetcode.cn id=399 lang=typescript
 *
 * [399] 除法求值
 */

//参考官方题解--查并集,维护权值
//路径压缩--让所以子节点/孙子节点，指向终点
//如何在并查集中，维护权值

// @lc code=start

class UnionFind {
  parents: number[]
  //权重
  weight: number[]
  constructor(n: number) {
    this.parents = Array.from({ length: n }, (v, k) => k);
    this.weight = Array.from({ length: n }, (v, k) => 1);
  }

  find(x: number) {
    if (this.parents[x] !== x) {
      let origin = this.parents[x]
      this.parents[x] = this.find(this.parents[x])
      this.weight[x] *= this.weight[origin]
    }
    return this.parents[x];
  }
  merge(x: number, y: number, val: number): boolean {
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return false;
    this.parents[rootX] = rootY

    this.weight[rootX] = this.weight[y] * val / this.weight[x]
    return true
  }
  isConnected(x: number, y: number): number {
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) {
      return this.weight[x] / this.weight[y]
    } else {
      return -1
    }
  }
}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const res: number[] = []
  const Len = equations.length
  const UF = new UnionFind(Len * 2)
  const map = new Map()
  let id = 0  
  for (let i = 0; i < Len; i++) {
    const [var1, var2] = equations[i]
    if (!map.has(var1)) {
      map.set(var1, id++)
    }
    if (!map.has(var2)) {
      map.set(var2, id++)
    }
    UF.merge(map.get(var1), map.get(var2), values[i])
  }

  for (let i = 0; i < queries.length; i++) {
    const [var1, var2] = queries[i]
    const id1 = map.get(var1), id2 = map.get(var2)
    if (id1 === undefined || id2 === undefined) {
      res.push(-1)
    } else {
      res.push(
        UF.isConnected(id1, id2)
      )
    }
  }
  return res
};
// @lc code=end
calcEquation([["a", "b"], ["b", "c"], ["bc", "cd"]], [1.5, 2.5, 5.0], [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]])

calcEquation([["a", "b"], ["b", "c"]],
  [2.0, 3.0],
  [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]])

calcEquation([["a", "b"]], [0.5], [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]])  


