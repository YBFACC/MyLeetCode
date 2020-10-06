/*
 * @lc app=leetcode.cn id=834 lang=typescript
 *
 * [834] 树中距离之和
 */

// @lc code=start
//参考--树形dp--子树内/外的节点与 root 的距离和
function sumOfDistancesInTree(N: number, edges: number[][]): number[] {
  const graph:number[][] = Array.from({ length: N }, () => [])
  for (const [from, to] of edges) {
    graph[from].push(to)
    graph[to].push(from)
  }

  const distSum = Array.from({ length: N }, () => 0)
  const nodeNum = Array.from({ length: N }, () => 1)

  const postOrder = (root: number, parent: number) => {
    const neighbors = graph[root]
    for (const neighbor of neighbors) {
      if (neighbor === parent) {
        continue
      }
      postOrder(neighbor, root)
      nodeNum[root] += nodeNum[neighbor]
      distSum[root] += distSum[neighbor] + nodeNum[neighbor]
    }
  }


  const preOrder = (root: number, parent: number) => {
    const neighbors = graph[root];
    for (const neighbor of neighbors) {
      if (neighbor == parent) {
        continue;
      }
      distSum[neighbor] = distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
      preOrder(neighbor, root);
    }
  }


  postOrder(0, -1)
  preOrder(0, -1)

  return distSum
};
// @lc code=end

sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]])