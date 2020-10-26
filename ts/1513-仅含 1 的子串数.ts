//自己--滑动窗口
//感觉类似的题目做过
//dp[i] = dp[i-1] + i
//res+=dp[i]
function numSub(s: string): number {
  let res = 0
  let count = 0
  for (const char of s) {
    if (char === '1') {
      res += ++count
      res %= 1000000007
    } else {
      count = 0
    }
  }
  return res
};
numSub("111111")
numSub("0110111")