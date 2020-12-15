/*
 * @lc app=leetcode.cn id=1131 lang=typescript
 *
 * [1131] 绝对值表达式的最大值
 */


 // |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
 
//  =  (arr1[i] + arr2[i] + i) - (arr1[j] + arr2[j] + j)
//  =  (arr1[i] + arr2[i] - i) - (arr1[j] + arr2[j] - j)
//  =  (arr1[i] - arr2[i] + i) - (arr1[j] - arr2[j] + j)
//  =  (arr1[i] - arr2[i] - i) - (arr1[j] - arr2[j] - j)
//  = -(arr1[i] + arr2[i] + i) + (arr1[j] + arr2[j] + j)
//  = -(arr1[i] + arr2[i] - i) + (arr1[j] + arr2[j] - j)
//  = -(arr1[i] - arr2[i] + i) + (arr1[j] - arr2[j] + j)
//  = -(arr1[i] - arr2[i] - i) + (arr1[j] - arr2[j] - j)
 
// 因为存在四组两两等价的展开，所以可以优化为四个表达式：
// A = arr1[i] + arr2[i] + i
// B = arr1[i] + arr2[i] - i
// C = arr1[i] - arr2[i] + i
// D = arr1[i] - arr2[i] - i

// max( |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|)
// = max(max(A) - min(A),
//       max(B) - min(B),
//       max(C) - min(C),
//       max(D) - min(D))

// 作者：JiayangWu
// 链接：https://leetcode-cn.com/problems/maximum-of-absolute-value-expression/solution/python-jie-fa-bao-li-shu-xue-by-jiayangwu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


//参考--n维曼哈顿距离

// @lc code=start

const ways =
  [
    [1, 1, 1],
    [1, 1, -1],
    [1, -1, 1],
    [-1, 1, 1],
    [1, -1, -1],
    [-1, -1, 1],
    [-1, 1, -1],
    [-1, -1, -1]
  ]
function maxAbsValExpr(arr1: number[], arr2: number[]): number {
  const Len = arr1.length
  let res = 0
  const max_v = Array.from({ length: 8 }, () => Number.MIN_SAFE_INTEGER)
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < Len; j++) {
      max_v[i] = Math.max(max_v[i], j * ways[i][0] + arr1[j] * ways[i][1] + arr2[j] * ways[i][2])
    }
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < Len; j++) {
      res = Math.max(res, max_v[i] - j * ways[i][0] - arr1[j] * ways[i][1] - arr2[j] * ways[i][2])
    }
  }

  return res
};
// @lc code=end

maxAbsValExpr([1, 2, 3, 4], [-1, 4, 5, 6])