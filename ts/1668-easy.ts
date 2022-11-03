/**
 * 提示－－ｄｐ
 * @param sequence 
 * @param word 
 * @returns 
 */
function maxRepeating(sequence: string, word: string): number {
  const sLength = sequence.length, wLength = word.length
  if (sLength < wLength) return 0
  const dp = Array.from({ length: sLength + 10 }, () => 0)
  let max = 0
  for (let i = wLength; i <= sLength; i++) {
    const before = sequence.slice(i - wLength, i)
    if (before === word) {
      dp[i] = dp[i - wLength] + 1
      max = Math.max(max, dp[i])
    }

    console.log()
  }

  return max
};

maxRepeating("ababc", "ab")