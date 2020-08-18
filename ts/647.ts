//参考--二维dp-回文
//注意：dp只能判断是否为回文，不能用来计数
function countSubstrings(s: string): number {
  const Len = s.length
  const dp = Array.from({ length: Len }, () =>
    Array.from({ length: Len }, () => false)
  )
  let count = 0
  for (let i = Len - 1; i >= 0; i--) {
    for (let j = i; j < Len; j++) {
      if (s[i] === s[j]) {
        if (j - i < 2) {
          dp[i][j] = true
          count++
        } else {
          if (dp[i + 1][j - 1]) {
            dp[i][j] = true
            count++
          }
        }
      }
    }
  }
  return count
}

countSubstrings('abcbd')
