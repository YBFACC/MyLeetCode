
/**
 * 自己－－简单
 * @param s1 
 * @param s2 
 * @returns 
 */
function areAlmostEqual(s1: string, s2: string): boolean {
  let res1: string[] = [], res2: string[] = []
  for (let i = 0; i < s2.length; i++) {
    if (s1[i] !== s2[i]) {
      res1.push(s1[i]);
      res2.push(s2[i])
    }
  }
  if (res1.length === 0) return true
  if (res1.length === 2) {
    if (res1[0] === res2[1] && res1[1] === res2[0])
      return true
  }

  return false
};