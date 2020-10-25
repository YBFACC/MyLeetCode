/*
 * @lc app=leetcode.cn id=1362 lang=typescript
 *
 * [1362] 最接近的因数
 */

// @lc code=start
//参考--数学方法
//2个数之和固定--2个数绝对差越小--乘积越大
function closestDivisors(num: number): number[] {
  const num1 = num + 1
  const num2 = num + 2
  let list1 = helper(num1)
  let list2 = helper(num2)
  return Math.abs(list1[0] - list1[1]) <
    Math.abs(list2[0] - list2[1]) ?
    list1 : list2
};

function helper(num: number): number[] {
  let temp = Math.ceil(Math.sqrt(num))
  while (temp > 0) {
    if (num % temp === 0) {
      return [temp, num / temp]
    } else {
      temp--
    }
  }
  return []
}
// @lc code=end

console.log(closestDivisors(8))
