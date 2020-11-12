//自己--编辑距离的降低版

function isOneEditDistance(s: string, t: string): boolean {
  if (s === t) return false
  const s_Len = s.length
  const t_Len = t.length
  if (s_Len === t_Len) {
    for (let i = 0; i < s_Len; i++) {
      const temp_s = s.slice(0, i) + s.slice(i + 1)
      const temp_t = t.slice(0, i) + t.slice(i + 1)
      if (temp_s === temp_t) {
        return true
      }
    }
  }
  if (s_Len > t_Len) {
    for (let i = 0; i < s_Len; i++) {
      const temp_s = s.slice(0, i) + s.slice(i + 1)
      if (temp_s === t) {
        return true
      }
    }
  }
  if (s_Len < t_Len) {
    for (let i = 0; i < t_Len; i++) {
      const temp_t = t.slice(0, i) + t.slice(i + 1)
      if (s === temp_t) {
        return true
      }
    }
  }
  return false
};

console.log(isOneEditDistance("1203", "1213"))

console.log(isOneEditDistance("cab", "ad"))

console.log(isOneEditDistance("ab", "acb"))