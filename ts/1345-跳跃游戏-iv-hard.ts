/*
 * @lc app=leetcode.cn id=1345 lang=typescript
 *
 * [1345] 跳跃游戏 IV
 */

//提示--自己的深搜不对，改为广搜
//此题可以双向广搜，加速
// @lc code=start
function minJumps(arr: number[]): number {
  if (arr.length <= 1) return 0
  const Len = arr.length
  const list = Int32Array.from({ length: Len }, (v, k) => k)
  const map = new Map()
  for (let i = 0; i < Len; i++) {
    if (!map.has(arr[i])) map.set(arr[i], [])
    if (i > 0 && arr[i - 1] === arr[i ]&& arr[i] === arr[i + 1]) continue
    map.get(arr[i]).push(i)
  }
  let queue = [0]//index
  let level = 1
  const set = new Set()
  while (queue.length > 0) {
    let size = queue.length
    let temp: any = []
    while (size-- > 0) {
      const curr = queue.pop() as number
      if (set.has(curr)) continue
      set.add(curr)
      list[Len - 1] = Math.min(list[Len - 1], Len - 1 - curr + list[curr])
      const floor = map.get(arr[curr])//index_list
      for (const item of floor) {
        list[item] = Math.min(list[item], level)
      }
      curr < Len - 1 && temp.push(curr + 1)
      curr >= 1 && temp.push(curr - 1)
      temp.push(...floor)
    }
    queue = temp.slice()
    temp = null
    level++
  }
  return list[Len - 1]
};
// @lc code=end


