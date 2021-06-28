/*
 * @lc app=leetcode.cn id=815 lang=typescript
 *
 * [815] 公交路线
 */

// @lc code=start
// function numBusesToDestination(routes: number[][], source: number, target: number): number {
//   if (source === target) return 0

//   //站点、index
//   const map: Map<number, number[]> = new Map()
//   for (let i = 0; i < routes.length; i++) {
//     for (let j = 0; j < routes[i].length; j++) {
//       if (!map.has(routes[i][j])) {
//         map.set(routes[i][j], [])
//       }
//       map.get(routes[i][j])!.push(i)
//     }
//   }
//   let res = 0
//   let bfs = [source]
//   const visited = new Set()
//   while (bfs.length > 0) {
//     res++
//     let size = bfs.length
//     const temp: Set<number> = new Set()
//     while (size-- > 0) {
//       let curr = bfs.shift() as number
//       if (visited.has(curr)) continue
//       if (map.has(curr)) {
//         const index_list = map.get(curr) as number[]
//         for (const item of index_list) {
//           for (const num of routes[item]) {
//             if (curr === target) return res - 1
//             temp.add(num)
//           }
//         }
//       }
//       visited.add(curr)
//     }
//     bfs = [...temp]
//   }
//   return -1
// };
// @lc code=end

//参考--广搜+图
//自己去重，过不去
//自己应该注重车辆的去重，而不是站点的去重

function numBusesToDestination(routes: number[][], source: number, target: number): number {
  if (source === target) return 0

  //站点index，相邻站点index
  const map: Map<number, number[]> = new Map()
  const Len = routes.length
  //关键
  const edge = Array.from({ length: Len },
    () => Array.from({ length: Len }, () => false))

  for (let i = 0; i < Len; i++) {
    for (const site of routes[i]) {
      const list = (map.get(site) || []);
      //将第1项和第j项联系起来
      for (const j of list) {
        edge[i][j] = edge[j][i] = true;
      }
      list.push(i);
      map.set(site, list);
    }
  }
  //这步可能是我过不去的重点
  //统计从起点到i站的最小距离
  const dis = Array.from({ length: Len }, () => -1)
  const que = [];
  for (const bus of (map.get(source) || [])) {
    dis[bus] = 1;
    que.push(bus);
  }

  while (que.length > 0) {
    const x = que.shift() as number
    for (let y = 0; y < Len; y++) {
      if (edge[x][y] && dis[y] === -1) {
        dis[y] = dis[x] + 1;
        que.push(y);
      }
    }
  }

  //能到终点站的最小值统计
  let ret = Number.MAX_VALUE;
  for (const bus of (map.get(target) || [])) {
    if (dis[bus] !== -1) {
      ret = Math.min(ret, dis[bus]);
    }
  }
  return ret === Number.MAX_VALUE ? -1 : ret;

};






console.log(numBusesToDestination([
  [7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]]
  , 15
  , 12))

console.log(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6))

console.log(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 1, 6))