/*
 * @lc app=leetcode.cn id=1345 lang=typescript
 *
 * [1345] 跳跃游戏 IV
 */

//提示--自己的深搜不对，改为广搜

// @lc code=start
// function minJumps(arr: number[]): number {
//   if (arr.length <= 1) return 0
//   const Len = arr.length
//   const list = Int32Array.from({ length: Len }, (v, k) => k)
//   const map = new Map()
//   for (let i = 0; i < Len; i++) {
//     if (!map.has(arr[i])) map.set(arr[i], [])
//     if (i > 0 && arr[i - 1] === arr[i ]&& arr[i] === arr[i + 1]) continue
//     map.get(arr[i]).push(i)
//   }
//   let queue = [0]//index
//   let level = 1
//   const set = new Set()
//   while (queue.length > 0) {
//     let size = queue.length
//     let temp: any = []
//     while (size-- > 0) {
//       const curr = queue.pop() as number
//       if (set.has(curr)) continue
//       set.add(curr)
//       list[Len - 1] = Math.min(list[Len - 1], Len - 1 - curr + list[curr])
//       const floor = map.get(arr[curr])//index_list
//       for (const item of floor) {
//         list[item] = Math.min(list[item], level)
//       }
//       curr < Len - 1 && temp.push(curr + 1)
//       curr >= 1 && temp.push(curr - 1)
//       temp.push(...floor)
//     }
//     queue = temp.slice()
//     temp = null
//     level++
//   }
//   return list[Len - 1]
// };
// @lc code=end


//类似127题--双向广搜

function minJumps(arr: number[]): number {
  if (arr.length <= 1) return 0
  const Len = arr.length
  const map = new Map()
  //arr的value为key
  //相同arr的value的index存储为数组
  for (let i = 0; i < Len; i++) {
    if (!map.has(arr[i])) map.set(arr[i], [])
    if (i > 0 && arr[i - 1] === arr[i] && arr[i] === arr[i + 1]) continue
    map.get(arr[i]).push(i)
  }
  //如果首尾值相同，直接返回
  if (arr[0] === arr[Len - 1]) return 1

  let beginSet: Set<number> = new Set([0])
  let endSet: Set<number> = new Set([Len - 1])

  let level = 1
  //存储所有出现的index，避免重复使用，剪枝
  const all = new Set([...beginSet, ...endSet])

  while (beginSet.size > 0) {
    //存储beginSet能到到所有index
    const newSet: Set<number> = new Set()
    for (const item of beginSet) {
      if (endSet.has(item)) {
        return level
      }
      //遍历arr[item]能到到所有index
      for (const index of map.get(arr[item])) {
        if (endSet.has(index)) {
          return level
        }
        if (all.has(index)) continue
        newSet.add(index)
        all.add(index)
      }
      const add = item + 1
      const del = item - 1

      if (endSet.has(add) || endSet.has(del)) {
        return level
      }
      if (add < Len && !all.has(add)) {
        newSet.add(add)
        all.add(add)
      }
      if (del >= 0 && !all.has(del)) {
        newSet.add(del)
        all.add(del)
      }
    }
    beginSet = newSet
    level++
    //每次使用较少的index集合
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet]
    }
  }
  return 0
};

//2
console.log(minJumps([48, -43, 90, 33, 35, 13, -51, 35, -20, -78, -43, 90, -80, -51, 39, -46, -45, -20, 39, 36, 90, 13, 51, 30, -46, 39, 30, 39, -46, 59, -80, -80, 36, 90, 69, 39, 36, -78, -43, 33, -43, 69, 18, 33, -46, 33, 36, -7, 59, -45, -46, -43, -46, 33, -80, -80, -51, 69, -45, 36, 33, 90, 35, 30, -59, 51, -45, -20, -43, -16, 18, 48, 13, -78, 69, 38, -95, 69, 69, 35, 35, 13, 13, 90, 13, 18, -43, -46, -16, -16, -100, -43]))
//3
console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]))
