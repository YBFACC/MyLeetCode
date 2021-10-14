function minDistance(word1: string, word2: string): number {
  const dp = Array.from({ length: word1.length + 1 }, () => Array.from({ length: word2.length + 1 }, () => 0))
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = 1
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
      }
    }
  }
  const max = dp[word1.length][word2.length] - 1
  return word1.length + word2.length - max - max
};