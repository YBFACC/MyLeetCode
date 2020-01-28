/**
 * 自己 ---没有考虑完整
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
// var addToArrayForm = function(A, K) {
//   var temp = K.toString()
//     .split('')
//     .map(e => parseInt(e), 10)
//   var lenA = A.length
//   var lenT = temp.length
//   for (let i = 1; i <= temp.length; i++) {
//     A[lenA - i] += temp[lenT - i]
//   }
//   for (let i = lenA - 1; i >= 0; i--) {
//     if (A[i] > 9) {
//       A[i] -= 10
//       if (i === 0) {
//         A.unshift(1)
//       } else {
//         A[i - 1]++
//       }
//     }
//   }
//   return A
// }

/**
 * copy
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */

var addToArrayForm = function(A, K) {
  if (!K) return A

  K = String(K).split('')
  let index = A.length - 1,
    carry = 0
  while (K.length > 0 || carry > 0) {
    let k = K.length > 0 ? Number(K.pop()) : 0
    if (index === -1) {
      A.unshift(0)
      index++
    }

    let sum = k + A[index] + carry
    if (sum > 9) {
      sum = String(sum)
      carry = Number(sum.slice(0, sum.length - 1))
      sum = Number(sum[sum.length - 1])
    } else {
      carry = 0
    }

    A[index] = sum
    index--
  }

  if (carry !== 0) {
    A.unshift(carry)
  }

  return A
}

/**
 * copy改---性能棒
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */

var addToArrayForm = function(A, K) {
  if (!K) return A

  K = String(K).split('')
  let index = A.length - 1,
    carry = 0
  while (K.length > 0 || carry > 0) {
    let k = K.length > 0 ? Number(K.pop()) : 0
    if (index === -1) {
      A.unshift(0)
      index++
    }
    let sum = k + A[index] + carry
    if (sum > 9) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }
    A[index] = sum
    index--
  }
  return A
}
console.log(addToArrayForm([9, 9, 9, 9], 34))
