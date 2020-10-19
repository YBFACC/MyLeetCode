/*
 * @lc app=leetcode.cn id=880 lang=typescript
 *
 * [880] 索引处的解码字符串
 */

// @lc code=start
//参考--不能展开--逆向推导
var decodeAtIndex = function (S: string, K: number): string {
  let size = 0
  for (let i = 0; i < S.length; i++) {
    if (isNaN(+S[i])) {
      size++
    } else {
      size *= +S[i]
    }
    if (size >= K) {
      S = S.slice(0, i + 1)
      break
    }
  }
  if (K > size) return ""
  for (let i = S.length - 1; i >= 0; i--) {
    if (K === 0 && isNaN(+S[i])) return S[i]
    if (!isNaN(+S[i])) {
      size /= +S[i]
      K %= size
    } else {
      if (K === size) {
        return S[i]
      } else {
        size--
      }
    }
  }
  return ""
};

// @lc code=end

decodeAtIndex("leet2code3", 10)