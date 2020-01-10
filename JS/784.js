/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function f(str) {
  let res = []
  /**
   * @param {cur} 当前累积的string
   * 
   */
  var dfs = (cur, S, index, res) => {
    if (index == S.length) {
      res.push(cur)
      return;
    }
    const char = S[index]
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      dfs(cur + char.toUpperCase(), S, index + 1, res)
      dfs(cur + char.toLowerCase(), S, index + 1, res)
    } else {
      dfs(cur + char, S, index + 1, res)
    }
  }
  dfs("",str,0,res)
  return res
}
console.log(new letterCasePermutation('12aws345'));

