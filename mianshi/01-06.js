/**
 * 改自己的443题--性能一般
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let count = 1
  let res = ''
  let chars = S.split('')
  while (chars.length !== 0) {
    if (chars[0] === chars[1]) {
      count++
    } else {
      res = res + chars[0] + count
      count = 1
    }
    chars.splice(0, 1)
  }
  return res.length < S.length ? res : S
}

/**
 * 自己优化版
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let count = 1 //统计字母数量
  let res = '' //结果
  for (let i = 1; i <= S.length; i++) {
    if (S[i] === S[i - 1]) {//字符相等
      count++//计数+1
    } else {
      res = res + S[i - 1] + count//加入结果
      count = 1//初始化计数
    }
  }
  return res.length < S.length ? res : S
}


compressString('aabcccccaaa')
