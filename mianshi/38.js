/**
 * 自己--回溯-set--排列组合
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  if (s.length === 0) return ''
  let arr = s.split('')
  let set = new Set()
  const dfs = function (arr, temp) {
    if (temp.length === s.length) {
      set.add(temp.join(''))
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '#') continue
      temp.push(arr[i])
      arr[i] = '#'
      dfs(arr, temp)
      arr[i] = temp.pop()
    }
  }
  dfs(arr, [])
  return [...set]
}

console.log(permutation('abc'))
