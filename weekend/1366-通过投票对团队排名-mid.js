// /**
//  * 自己--178周赛--没完成
//  * @param {string[]} votes
//  * @return {string}
//  */
// var rankTeams = function(votes) {
//   let count = votes[0].length
//   let res = ''
//   let obj = new Map()
//   let fen = []
//   for (let i = count; i > 0; i--) {
//     fen.push(Math.pow(26, count))
//   }
//   for (let i = 0; i < votes.length; i++) {
//     let item = votes[i]
//     for (let j = 0; j < item.length; j++) {
//       obj.set(obj[j], obj.has[j] ? obj.get(j) + fen[j] : fen[j])
//     }
//   }
//   let max = Number.MIN_VALUE
//   let word = ''
//   obj.forEach((v, k) => {
//     if (v > max) {
//       word = k
//     }
//   })
//   res += word
// }

/**
 * copy--自定义排序
 * @param {string[]} votes
 * @return {string}
 */

var rankTeams = function(votes) {
  if (votes.length === 0) return ''
  let ans = votes[0].split('')
  let list = []
  for (let i = 0; i < votes.length; i++) {
    let res = 1
    let str = votes[i]
    while (res <= str.length) {
      if (list[res] === undefined) {
        list[res] = {}
        list[res][str.charAt(res - 1)] = 1
      } else {
        if (list[res][str.charAt(res - 1)]) {
          list[res][str.charAt(res - 1)]++
        } else {
          list[res][str.charAt(res - 1)] = 1
        }
      }
      res++
    }
  }
  ans.sort((a, b) => {
    let res = 0
    let rank = 1
    while (res === 0) {
      if (list[rank] === undefined) {
        a < b ? (res = -1) : (res = 1)
      } else {
        let A = list[rank][a] || 0
        let B = list[rank][b] || 0
        if (A !== B) {
          A > B ? (res = -1) : (res = 1)
        }
      }

      rank++
    }
    return res
  })
  return ans.join('')
}
rankTeams(['ABC', 'ACB', 'ABC', 'ACB', 'ACB'])
