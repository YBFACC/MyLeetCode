
//自己--差分
//object下标有序
//参加一个会议+1，离开一个会议-1
//遍历完毕，sum不能大于1


interface obj252 {
  [index: number]: number
}
function canAttendMeetings(intervals: number[][]): boolean {
  const map: obj252 = {}

  for (const [from, to] of intervals) {
    if (map[from] === undefined) map[from] = 0
    if (map[to] === undefined) map[to] = 0
    map[from]++
    map[to]--
  }
  let count = 0
  for (let i = 0; i < 1000000; i++) {
    if (map[i]) {
      count += map[i]
      if (count > 1) return false
    }
  }

  return true
};
canAttendMeetings([[0, 30], [5, 10], [15, 20]])