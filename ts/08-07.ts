//自己--回溯
function permutation(S: string): string[] {
  const res: string[] = []
  const list = S.split('')
  const dfs = function (temp: string[], list: string[]): void {
    if (list.length === 0) {
      res.push(temp.join(''))
      return
    }
    for (let i = 0; i < list.length; i++) {
      temp.push(list[i])
      const _temp = list.slice()
      _temp.splice(i, 1)
      dfs(temp, _temp)
      temp.pop()
    }
  }
  dfs([], list)

  return res
}

console.log(permutation('ab'))
