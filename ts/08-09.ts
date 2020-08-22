//自己--类卡特兰数--排列组合
function generateParenthesis(n: number): string[] {
  const Len = n + 1
  const dp: Array<Set<string>> = Array.from({ length: Len }, () => new Set())
  dp[0].add('')
  dp[1].add('()')
  for (let i = 2; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      const temp1 = dp[j]//0=>i-1
      const temp2 = dp[i - j - 1]//i-1=>0
      for (const _temp1 of temp1) {
        for (const _temp2 of temp2) {
          //解释：为什么以下4步等价
          //dp[j]和dp[i - j - 1]代表0到i-1到完全组合
          dp[i].add(_temp1 + '(' + _temp2 + ')')
          // dp[i].add(_temp2 + '(' + _temp1 + ')')

          // dp[i].add('(' + _temp1 + ')' + _temp2)
          // dp[i].add(_temp2 + '(' + _temp1 + ')')
        }
      }
    }
  }
  return [...dp[n]]
}
console.log(generateParenthesis(4))

console.log(
  [
    '(((())))',
    '((()()))',
    '((())())',
    '((()))()',
    '(()(()))',
    '(()()())',
    '(()())()',
    '(())(())',
    '(())()()',
    '()((()))',
    '()(()())',
    '()(())()',
    '()()(())',
    '()()()()'
  ].length
)
