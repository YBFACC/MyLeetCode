
//自己--回溯+去重

function permutation(s: string): string[] {
  const set: Set<string> = new Set()
  const map = new Map()
  for (const _s of s) {
    map.set(_s, map.has(_s) ? map.get(_s) + 1 : 1)
  }

  const dfs = function (temp: string[]) {
    if (temp.length === s.length) {
      set.add(temp.join(''))
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (map.get(s[i]) <= 0) continue
      temp.push(s[i])
      map.set(s[i], map.get(s[i]) - 1)
      dfs(temp)
      temp.pop()
      map.set(s[i], map.get(s[i]) + 1)
    }
  }
  dfs([])

  return [...set]
};

console.log(permutation('aab'))