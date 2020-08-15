/**
 * 参考--经典交换xy
 * s1=xy
 * s2=yx
 * S2+S2=yxyx
 * @param s1
 * @param s2
 */

function isFlipedString(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false

  return (s2 + s2).includes(s1)
}

console.log(isFlipedString('', ''))
