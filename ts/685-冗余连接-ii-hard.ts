/*
 * @lc app=leetcode.cn id=685 lang=typescript
 *
 * [685] 冗余连接 II
 */
import UnionFind from "../moban/UnionFind";
// @lc code=start
//COPY--查并集-3种有向环
function findRedundantDirectedConnection(edges: number[][]): number[] {
  let len = edges.length;
  let sln = new UnionFind(len);
  let merged = [];
  for (let i = 0; i <= len; i++) {
    merged[i] = i;
  }
  let twoParent = -1;
  let cycle = -1;
  for (let i = 0; i < edges.length; i++) {
    const [begin, end] = edges[i]
    
    if (merged[end] != end) {
      twoParent = i;
    } else {
      merged[end] = begin;
      if (sln.find(begin) == sln.find(end)) {
        cycle = i;
      } else {
        sln.merge(begin, end);
      }
    }
  }
  if (twoParent < 0) {
    //只有环
    return edges[cycle];
  } else {
    let TPnode = edges[twoParent];
    //有两个入度的点，此时判断有无环
    if (cycle >= 0) {
      return [merged[TPnode[1]], TPnode[1]]
    } else {
      return TPnode;
    }
  }
}

// @lc code=end

//[2,1]
console.log(findRedundantDirectedConnection([[2, 1], [3, 1], [4, 2], [1, 4]]))
//[2,3]
console.log(findRedundantDirectedConnection([[1, 2], [1, 3], [2, 3]]))
//[4,1]
console.log(findRedundantDirectedConnection([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]]))

console.log()