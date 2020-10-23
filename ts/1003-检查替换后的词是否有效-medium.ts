/*
 * @lc app=leetcode.cn id=1003 lang=typescript
 *
 * [1003] 检查替换后的词是否有效
 */

// @lc code=start
//提示--栈--有abc出栈
function isValid(s: string): boolean {
  const stack = []
  for (const item of s) {
    stack.push(item)
    if (stack.length >= 3) helper(stack)
  }

  return stack.length === 0
};
function helper(stack: string[]): void {
  const Len = stack.length
  const a = stack[Len - 1]
  const b = stack[Len - 2]
  const c = stack[Len - 3]
  if (c + b + a === 'abc') {
    stack.pop()
    stack.pop()
    stack.pop()
  }
}
// @lc code=end

console.log(isValid("aabcbabcc"))

console.log(isValid("aabcbc"))

console.log(isValid("abcabcababcc"))
console.log(isValid("abccba"))

console.log(isValid("cababc"))
