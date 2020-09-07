//参考--kmp--(N+M)*smalls.length
//需要对kmp对加深理解
function kmp(text: string, pattern: string): number[] {
  const res: number[] = []
  const tLen = text.length
  const pLen = pattern.length
  const next = Array.from({ length: pLen }, () => 0)
  next[0] = -1
  let n = -1
  for (let i = 0; i < pLen;) {
    if (n < 0 || pattern[i] === pattern[n]) {
      next[++i] = ++n
    } else {
      n = next[n]
    }
  }

  for (let pi = 0
    , ti = 0; pi < pLen && pLen - pi <= tLen - ti;) {
    if (pi < 0 || text[ti] === pattern[pi]) {
      ti++
      pi++
    } else {
      pi = next[pi]
    }
    if (pi === pLen) {
      res.push(ti - pLen)
      pi = next[pi]
    }
  }

  return res
}

function multiSearch(big: string, smalls: string[]): number[][] {
  const list: number[][] = []
  for (const small of smalls) {
    if (small.length === 0) {
      list.push([])
    } else {
      list.push(kmp(big, small))
    }
  }
  return list
};


