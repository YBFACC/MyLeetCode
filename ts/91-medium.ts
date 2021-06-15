
//参考--dp
//s[i-2]是十位

function numDecodings(s: string): number {
  const dp = Array.from({ length: s.length + 1 }, () => 0)
  dp[0] = 1
  for (let i = 1; i <= s.length; i++) {
    //个位是0 没有映射
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1]
    }
    const num = +(s[i - 2] + s[i - 1])
    if (i > 1 && s[i - 2] !== '0' && num <= 26) {
      dp[i] += dp[i - 2]
    }
  }
  return dp[dp.length - 1]
};

numDecodings("2268465")