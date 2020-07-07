/**
 * 自己--easy
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return []
  let set = new Set()
  for (let i = 0; i <= k; i++) {
    set.add(i * shorter + (k - i) * longer)
  }

  return [...set].sort((a, b) => a - b)
}
console.log(divingBoard(1, 2, 3))
