/*
 * @lc app=leetcode.cn id=989 lang=typescript
 *
 * [989] 数组形式的整数加法
 */

//自己--重做--按位相加

// @lc code=start
function addToArrayForm(A: number[], K: number): number[] {
  let res = ""
  let k = K + ''
  let j = A.join("")
  if (k.length < j.length) {
    [k, j] = [j, k]
  }
  let i_j = j.length - 1
  let i_k = k.length - 1
  let carry = 0
  while (i_j >= 0 || i_k >= 0 || carry !== 0) {
    const temp_j = i_j >= 0 ? (+j[i_j]) : 0
    const temp_k = i_k >= 0 ? (+k[i_k]) : 0
    let floor = temp_j + temp_k + carry
    carry = 0
    if (floor > 9) {
      carry++
      floor -= 10
    }
    res = floor + res
    i_j--
    i_k--
  }
  return (res + '').split('').map(x => +x)
};
// @lc code=end

console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1))