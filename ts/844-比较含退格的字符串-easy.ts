/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
//自己--滚动字符串--空间o1？
function backspaceCompare(S: string, T: string): boolean {

  return helper(S) === helper(T)
};

function helper(text: string): string {
  for (let i = 0; i < text.length; i++) {
    if (i === 0 && text[i] === '#') {
      text = text.slice(1)
      i--
      continue
    }
    if (text[i] === '#') {
      text = text.slice(0, i - 1) + text.slice(i + 1)
      i -= 2
    }
  }
  return text
}
// @lc code=end

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a##c", "#a#c"))
console.log(backspaceCompare("a#c", "b"))
