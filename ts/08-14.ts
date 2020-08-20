//参考--2个2维dp-卡特兰数
function countEval(s: string, result: number): number {
  const Len = s.length
  const dp0 = Array.from({ length: Len }, () =>
    Array.from({ length: Len }, () => 0)
  )
  const dp1 = Array.from({ length: Len }, () =>
    Array.from({ length: Len }, () => 0)
  )

  for (let i = 0; i < Len; i += 2) {
    if (s[i] === '1') {
      dp1[i][i] = 1
    } else {
      dp0[i][i] = 1
    }
  }
  for (let maxLen = 2; maxLen < Len; maxLen += 2) {
    for (let i = 0; i < Len - maxLen; i += 2) {
      for (let j = i; j <= i + maxLen - 2; j += 2) {
        if (s[j + 1] === '&') {
          dp1[i][i + maxLen] += dp1[i][j] * dp1[j + 2][i + maxLen]
          dp0[i][i + maxLen] +=
            dp1[i][j] * dp0[j + 2][i + maxLen] +
            dp0[i][j] * dp1[j + 2][i + maxLen] +
            dp0[i][j] * dp0[j + 2][i + maxLen]
        } else if (s[j + 1] === '|') {
          dp1[i][i + maxLen] +=
            dp1[i][j] * dp0[j + 2][i + maxLen] +
            dp0[i][j] * dp1[j + 2][i + maxLen] +
            dp1[i][j] * dp1[j + 2][i + maxLen]
          dp0[i][i + maxLen] += dp0[i][j] * dp0[j + 2][i + maxLen]
        } else {
          dp1[i][i + maxLen] +=
            dp1[i][j] * dp0[j + 2][i + maxLen] +
            dp0[i][j] * dp1[j + 2][i + maxLen]

          dp0[i][i + maxLen] +=
            dp0[i][j] * dp0[j + 2][i + maxLen] +
            dp1[i][j] * dp1[j + 2][i + maxLen]
        }
      }
    }
  }

  return result === 0 ? dp0[0][Len - 1] : dp1[0][Len - 1]
}

console.log(countEval('1^0|0|1', 0))
