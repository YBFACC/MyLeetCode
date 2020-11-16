//自己--差分

interface obj252 {
  [index: number]: number
}
function minMeetingRooms(intervals: number[][]): number {
  const map: obj252 = {}

  for (const [from, to] of intervals) {
    if (map[from] === undefined) map[from] = 0
    if (map[to] === undefined) map[to] = 0
    map[from]++
    map[to]--
  }
  let count = 0
  let res = 0
  for (const i of Object.values(map)) {
    res = Math.max(res, count += i)
  }

  return res
};