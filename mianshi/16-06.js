/**
 * 自己--排序后+双指针
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function (a, b) {
  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)
  if (a.length === 0) return b[0]
  if (b.length === 0) return a[0]
  let a_index = 0
  let b_index = 0
  let res = Number.MAX_SAFE_INTEGER
  while (a_index < a.length && b_index < b.length) {
    const _A = a[a_index]
    const _B = b[b_index]
    res = Math.min(res, Math.abs(_A - _B))
    if (_A < _B) {
      a_index++
    } else if (_A > _B) {
      b_index++
    } else {
      a_index++
      b_index++
    }
  }
  return res
}
smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])
