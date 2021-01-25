/*
 * @lc app=leetcode.cn id=1203 lang=typescript
 *
 * [1203] 项目管理
 */

//参考--双重拓扑排序

// @lc code=start

//抽离的公共类--拓扑排序
const topSort = (deg: number[], graph: number[][], items: number[]) => {
  const Q: number[] = []
  for (const item of items) {
    if (deg[item] === 0) {
      Q.push(item)
    }
  }
  const res = []
  let index = 0
  while (index < Q.length) {
    const u = Q[index]
    res.push(u)
    for (const item of graph[u]) {
      if (--deg[item] === 0) {
        Q.push(item)
      }
    }
    index++
  }
  return res.length === items.length ? res : []
}

function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
  const groupItem: number[][] = Array.from({ length: n + m }, () => [])
  // 组间和组内依赖图
  const groupGraph: number[][] = Array.from({ length: n + m }, () => [])
  const itemGraph: number[][] = Array.from({ length: n + m }, () => [])

  // 组间和组内入度数组
  const groupDegree: number[] = Array.from({ length: n + m }, () => 0)
  const itemDegree: number[] = Array.from({ length: n + m }, () => 0)

  const id = new Array(n + m).fill(0).map((v, index) => index);

  let addId = m;
  //将同类合并到同组，-1的新建一组
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) {
      group[i] = addId++
    }
    groupItem[group[i]].push(i)
  }
  //核心：建立类依赖图、子项依赖图
  for (let i = 0; i < n; i++) {
    const curGroupId = group[i]
    for (const item of beforeItems[i]) {
      const beforeGroupId = group[item]
      if (curGroupId === beforeGroupId) {
        itemDegree[i]++
        itemGraph[item].push(i)
      } else {
        groupDegree[curGroupId]++
        groupGraph[beforeGroupId].push(curGroupId)
      }
    }
  }

  //得到不需要前置依赖的类
  const groupSort = topSort(groupDegree, groupGraph, id)
  if (groupSort.length === 0) return []

  const ans = []

  for (const curGroupId of groupSort) {
    if (groupItem[curGroupId].length === 0) continue
    const floor = topSort(itemDegree, itemGraph, groupItem[curGroupId])
    if (floor.length === 0) return []
    ans.push(...floor)
  }

  return ans
};

// @lc code=end

console.log(sortItems(
  8,
  2,
  [-1, -1, 1, 0, 0, 1, 0, -1],
  [[], [6], [5], [6], [3, 6], [], [], []])
)



console.log(sortItems(
  8,
  2,
  [-1, -1, 1, 0, 0, 1, 0, -1],
  [[], [6], [5], [6], [3], [], [4], []]
))

console.log(sortItems(
  5,
  5,
  [2, 0, -1, 3, 0],
  [[2, 1, 3], [2, 4], [], [], []]
))

