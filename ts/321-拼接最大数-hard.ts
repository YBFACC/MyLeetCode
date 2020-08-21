/*
 * @lc app=leetcode.cn id=321 lang=typescript
 *
 * [321] 拼接最大数
 */

// @lc code=start

//参考--移掉K位数字的加强版
//暴力分类情况
//从nums1中取出i个，从num2中取出k-i个
//进行归并排序（大坑）
//保证字典序的大在前
function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
  let res = [0]
  for (let i = 0; i <= k; i++) {
    if (i <= nums1.length && k - i <= nums2.length) {
      let temp = merge(pick_num(nums1, i), pick_num(nums2, k - i))
      res = res > temp ? res : temp
    }
  }
  return res
}

function pick_num(num: number[], remian: number): number[] {
  const stack = []
  let k = num.length - remian
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && num[i] > stack[stack.length - 1]) {
      stack.pop()
      k--
    }
    stack.push(num[i])
  }
  return stack.slice(0, remian)
}

function merge(max1: number[], max2: number[]): number[] {
  let cur: number[] = []
  while (max1.length && max2.length) {
    cur.push(
      max1[0] >= max2[0] && max1 > max2
        ? (max1.shift() as number)
        : (max2.shift() as number)
    )
  }
  return cur.concat(max1, max2)
}
// @lc code=end

console.log(maxNumber([2, 5, 6, 4, 4, 0], [7, 3, 8, 0, 6, 5, 7, 6, 2], 15))
//[7,3,8,2,5,6,4,4,0,6,5,7,6,2,0]
console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5))

console.log(maxNumber([6, 7], [6, 0, 4], 5))
