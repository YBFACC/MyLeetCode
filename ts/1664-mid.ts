
/**
 * 自己－－前缀和
 * 维护2个前缀和奇数和偶数
 *  let even = evenList[i - 1] ?? 0
    let odd = oddList[i - 1] ?? 0
    even += oddList[Len - 1] - oddList[i]
    odd += evenList[Len - 1] - evenList[i]
 * @param nums 
 * @returns 
 */
function waysToMakeFair(nums: number[]): number {
  const evenList: number[] = [], oddList: number[] = [], Len = nums.length
  let res = 0
  nums.forEach((num, index) => {
    const even = evenList[evenList.length - 1] ?? 0
    const odd = oddList[oddList.length - 1] ?? 0
    if (index % 2 === 0) {
      evenList.push(even + num)
      oddList.push(odd)
    } else {
      evenList.push(even)
      oddList.push(odd + num)
    }
  })

  for (let i = 0; i < Len; i++) {
    let even = evenList[i - 1] ?? 0
    let odd = oddList[i - 1] ?? 0
    even += oddList[Len - 1] - oddList[i]
    odd += evenList[Len - 1] - evenList[i]
    if (even === odd) res++
  }

  return res
};

waysToMakeFair([2, 1, 6, 4])