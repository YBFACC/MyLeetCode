/*
 * @lc app=leetcode.cn id=1408 lang=typescript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
//自己--kmp匹配字符串
function stringMatching(words: string[]): string[] {
  const res: string[] = []
  const Len = words.length

  function KMP(pattern: string): void {
    const next = createNext(pattern)
    const plen = pattern.length

    for (const word of words) {
      if (word === pattern) continue
      const tlen = word.length
      let pi = 0
      let ti = 0
      while (pi < plen && plen - pi <= tlen - ti) {
        if (pi < 0 || pattern[pi] === word[ti]) {
          pi++
          ti++
        } else {
          pi = next[pi]
        }
      }
      if (pi === plen) {
        res.push(pattern)
        break
      }
    }
  }

  for (let i = 0; i < Len; i++) {
    KMP(words[i])
  }

  return res
};

function createNext(pattern: string): Int16Array {
  const Len = pattern.length
  const next = new Int16Array(Len)
  next[0] = -1
  let n = -1
  for (let i = 0; i < Len - 1;) {
    if (n < 0 || pattern[i] === pattern[n]) {
      next[++i] = ++n
    } else {
      n = next[n]
    }
  }

  return next
}
// @lc code=end

stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"])

stringMatching(["leetcode", "et", "code"])

stringMatching(["mass", "as", "hero", "superhero"])
