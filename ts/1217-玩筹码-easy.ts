//参考--看懂题目
function minCostToMoveChips(position: number[]): number {
  let odd = 0
  let even = 0

  for (const item of position) {
    if ((item & 1) === 1) {
      even++
    } else {
      odd++
    }
  }

  return Math.min(odd, even)
};