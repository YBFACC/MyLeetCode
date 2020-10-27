/*
 * @lc app=leetcode.cn id=898 lang=typescript
 *
 * [898] 子数组按位或操作
 */

// @lc code=start
//参考--逆序遍历，可以记录每次-位或的结果-达到剪枝的目的
//注意⚠️：这是在原数组上进行位或
//a
//a|b  b
//a|b|c  b|c  c
//位或遍历--递增数组
//https://leetcode-cn.com/problems/bitwise-ors-of-subarrays/solution/c-si-lu-pou-xi-fu-yong-he-jian-zhi-by-wen-mu-yang/
function subarrayBitwiseORs(A: number[]): number {
  const set = new Set()
  const Len = A.length
  for (let i = 0; i < Len; i++) {
    set.add(A[i])
    for (let j = i - 1; j >= 0; j--) {
      if ((A[i] | A[j]) === A[j]) {
        break
      }
      A[j] |= A[i]
      set.add(A[j])
    }
  }
  return set.size
};

// @lc code=end
//4
console.log(subarrayBitwiseORs([4, 1, 15]))

console.log(subarrayBitwiseORs([1, 2, 4]))

console.log(subarrayBitwiseORs([1, 1, 2]))

console.log(subarrayBitwiseORs([0]))