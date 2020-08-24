//自己--回溯
function permutation(S: string): string[] {
  const res: Set<string> = new Set()
  const dfs = function (temp: string, _S: string): void {
    if (temp.length === S.length) {
      res.add(temp)
      return
    }
    for (let i = 0; i < _S.length; i++) {
      dfs(temp + _S[i], _S.slice(0, i) + _S.slice(i + 1))
    }
  }
  dfs('', S)

  return [...res]
}

console.log(permutation('ab'))
