/*
 * @lc app=leetcode.cn id=1584 lang=typescript
 *
 * [1584] 连接所有点的最小费用
 */

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考--最小生成树-prim+堆

// @lc code=start
function minCostConnectPoints1(points: number[][]): number {
  const Len = points.length
  let res = 0
  const graph = Array.from({ length: Len }, () => Array.from({ length: Len }, () => 0))

  for (let i = 0; i < Len; i++) {
    for (let j = i + 1; j < Len; j++) {
      const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
      graph[i][j] = dist
      graph[j][i] = dist
    }
  }
  const lowcost = Array.from({ length: Len }, () => Infinity)
  const visited = Array.from({ length: Len }, () => false)

  //[距离，下标]
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[0] >= b[0]
  })
  heap.insert([0, 0])

  while (!heap.isEmpty()) {
    const [val, index] = heap.extract() as number[]
    if (visited[index]) continue
    visited[index] = true
    res += val
    for (let i = 0; i < Len; i++) {
      const temp = graph[i][index]
      if (!visited[i] && temp < lowcost[i]) {
        lowcost[i] = temp
        heap.insert([temp, i])
      }
    }
  }

  return res
};


//参考--Kruskal-耗时更高

/**
 * @param {number[][]} points
 * @return {number}
 */

function minCostConnectPoints(points: number[][]): number {
  //曼哈顿距离
  const dist = (x: number, y: number) => {
    return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
  }

  const n = points.length;
  const dsu = new DisjointSetUnion(n);
  const edges = []; //所有节点各两两连接的距离

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push([dist(i, j), i, j]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]); //边排序

  let ret = 0, num = 1; //ret为总长度（结果）
  for (const [length, x, y] of edges) {
    if (dsu.unionSet(x, y)) {
      ret += length;
      num += 1;
      if (num === n) { //所有节点都有连接
        break;
      }
    }
  }
  return ret;
};
//并查集类
class DisjointSetUnion {
  n: number
  rank: number[]
  f: number[]
  constructor(n: number) {
    this.n = n;
    this.rank = new Array(n).fill(1); //以该节点为根的树有几层
    this.f = new Array(n).fill(0).map((element, index) => index); //parent
  }

  find(x: number) { //找父节点
    if (this.f[x] === x) {
      return x;
    }
    this.f[x] = this.find(this.f[x]);
    return this.f[x];
  }

  unionSet(x: number, y: number) { //合并
    let fx = this.find(x), fy = this.find(y);
    if (fx === fy) { //已连接，再连接就会形成环
      return false;
    }
    //基于rank优化的合并
    if (this.rank[fx] < this.rank[fy]) {
      [fx, fy] = [fy, fx];
    }
    this.rank[fx] += this.rank[fy];
    this.f[fy] = fx;
    return true;
  }
}

// @lc code=end

console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]))