/*
 * @lc app=leetcode.cn id=1319 lang=typescript
 *
 * [1319] 连通网络的操作次数
 */

//自己--查并集--合并统计空闲边，将根节点连接起来

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

function makeConnected(n: number, connections: number[][]): number {
  let free = 0
  const UF = new UnionFind(n)
  for (const [s, e] of connections) {
    const root_s = UF.find(s)
    const root_e = UF.find(e)
    if (root_e === root_s) {
      free++
    } else {
      UF.merge(root_e, root_s)
    }
  }
  let count = -1
  for (let i = 0; i < UF.parent.length; i++) {
    if (i === UF.parent[i]) {
      count++
    }
  }

  return count <= free ? count : -1
};
// @lc code=end
//-1
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2]]))
//0
console.log(makeConnected(5, [[0, 1], [0, 2], [3, 4], [2, 3]]))

//1
console.log(makeConnected(4, [[0, 1], [0, 2], [1, 2]]))
//2
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]]))
