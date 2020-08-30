/*
 * @lc app=leetcode.cn id=841 lang=typescript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
//自己--BFS--去重
function canVisitAllRooms(rooms: number[][]): boolean {
  if (rooms.length === 0) return true
  const visited = new Set()
  const list = [0]
  while (list.length > 0) {
    const index = list.shift() as number
    if (visited.has(index)) continue
    visited.add(index)
    list.push(...rooms[index])
  }

  return visited.size === rooms.length
};
// @lc code=end


console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))