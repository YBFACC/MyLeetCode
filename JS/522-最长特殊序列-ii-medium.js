/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * 失败
 * @param {string[]} strs
 * @return {number}
 */
// var findLUSlength = function(strs) {
//   strs.sort((a, b) => b.length - a.length)
//   let range = new Set()
//   for (let i = 0; i < strs.length; i++) {
//     if (strs[i] !== strs[i + 1]) {
//       if (i === 0) {
//         return strs[0].length
//       }
//       if (strs[i - 1].includes(strs[i])) {
//         range.add(strs[i])
//         continue
//       }
//       for (const [item, v] of range.entries()) {
//         if (strs[i].length === 1) continue
//         let index = 0
//         let arr = item.split('')
//         let temp = arr.filter(v => {
//           if (index < strs[i].length) {
//             if (v === strs[i][index]) {
//               index++
//               return true
//             }
//           }
//           return false
//         })
//         if (strs[i] !== temp.join('')) {
//           return strs[i].length
//         }
//       }
//     } else {
//       range.add(strs[i])
//       i++
//     }
//   }
//   return -1
// }

/**
 * 自己--排序+map+判断是否为子序列--性能好
 * @param {string[]} strs
 * @return {number}
 */
//判断是否满足相对顺序
var Traverse = function(item, str) {
  let j = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === item[j]) j++
  }
  return j === item.length
}

var func = function(item, strs) {
  for (let i = 0; i < strs.length; i++) {
    if (item === strs[i] && i !== strs.length - 1) continue //跳过自己（除了自己为最后一项）
    if (item.length > strs[i].length) return item.length //判断的字符串大于strs剩余字符串长度，是=>找到最长特殊序列

    if (Traverse(item, strs[i]) && item !== strs[i]) {
      //是其他字符串的子序列，直接舍弃item
      break
    } else if (i === strs.length - 1) {
      //如果item在strs的最后一项，即全部遍历strs完成都没有重复
      return item.length
    }
  }
  return null
}

var findLUSlength = function(strs) {
  strs.sort((a, b) => b.length - a.length) //有利于简化，arr数组也是长字符串在前
  let hashmap = new Map()
  strs.forEach(v => {
    hashmap.set(v, hashmap.has(v) ? 1 + hashmap.get(v) : 1)
  })
  //存贮只出现一次的字符串
  //arr中长的字符串在前
  let arr = []
  hashmap.forEach((v, k) => {
    if (v === 1) {
      arr.push(k)
    }
  })

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], strs)) {
      return arr[i].length
    }
  }

  return -1
}

console.log(findLUSlength(['aba', 'cdc', 'eae']))
// @lc code=end
