/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * 参考--找规律--性能一般
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  if (seq.length === 0) return []
  let count = 1
  let arr = []
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === '(') {
      count++
      arr.push(count % 2)
    } else {
      arr.push(count % 2)
      count--
    }
  }
  return arr
}
// @lc code=end
maxDepthAfterSplit('()(())()')

// /**
//  * 自己--没做对
//  * @param {string} seq
//  * @return {number[]}
//  */
// var maxDepthAfterSplit = function(seq) {
//   if (seq.length === 0) return []
//   let count = 0
//   let index = 0
//   let arr = []
//   let res = []
//   for (let i = 0; i < seq.length; i++) {
//     if (seq[i] === ')') {
//       count--
//     } else {
//       count++
//     }
//     if (count === 0) {
//       arr.push(seq.slice(index, i + 1))
//       index = i + 1
//     }
//   }
//
//   arr.forEach(str => {
//     let temp = [0]
//     for (let i = 1; i < str.length / 2; i++) {
//       if (str[i] === str[i - 1]) {
//         temp.push(temp[i - 1] === 0 ? 1 : 0)
//       } else {
//         temp.push(temp[i - 1])
//       }
//     }
//     res.push(...temp, ...temp.reverse())
//   })
//   return res
// }
