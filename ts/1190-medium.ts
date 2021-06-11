/*
 * @lc app=leetcode.cn id=1190 lang=typescript
 *
 * [1190] 反转每对括号间的子串
 */

//参考--栈
//深搜可以做，但是没有栈简洁

// @lc code=start
function reverseParentheses(s: string): string {
  let str = ''
  const temp = []
  for (const _s of s) {
    if (_s === '(') {
      temp.push(str)
      str = ''
    } else if (_s === ')') {
      str = str.split('').reverse().join('')
      str = temp[temp.length - 1] + str
      temp.pop()
    } else {
      str += _s
    }
  }
  return str
};
// @lc code=end
console.log(reverseParentheses("(u(love)i)"))

console.log(reverseParentheses("sxmdll(q)eki(x)"))

console.log(reverseParentheses("((eqk((h))))"))
