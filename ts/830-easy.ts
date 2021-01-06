
//自己--重做--感觉自己写的复杂了

function largeGroupPositions(s: string): number[][] {
  const res: number[][] = []

  let index = 0
  const Len = s.length
  for (let i = 1; i < Len; i++) {
    if (s[i] === s[i - 1]) {
      continue
    } else {
      if (i - index > 2) {
        res.push([index, i - 1])
      }
      index = i
    }
  }
  if (Len - index > 2) {
    res.push([index, Len - 1])
  }
  return res
};

largeGroupPositions("abbxxxxzzy")