
//自己--easy
function isFlipedString(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false

  for (let i = 0; i <= s1.length; i++) {
    const str = s1.slice(i) + s1.slice(0, i)
    if (str === s2) return true
  }

  return false
}

console.log(isFlipedString('', ''))
