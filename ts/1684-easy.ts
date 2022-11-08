
/**
 * 自己－－暴力枚举
 * @param allowed 
 * @param words 
 * @returns 
 */
function countConsistentStrings(allowed: string, words: string[]): number {
  let count = 0
  words.forEach(word => {
    const set = new Set(word)
    for (const item of set) {
      if (!allowed.includes(item)) return
    }
    count++
  })

  return count
};

countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])