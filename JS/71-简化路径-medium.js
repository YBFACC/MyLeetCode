/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 *  自己---栈-正则--性能一般
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let arr = path.match(/(?<=\/)[A-Za-z0-9\.\_]+/g)
  if (arr === null) return '/'
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '.') continue
    if (arr[i] === '..') {
      if (stack.length === 0) continue
      stack.pop()
      continue
    }
    stack.push(arr[i])
  }
  return '/' + stack.join('/')
}

// @lc code=end

console.log(simplifyPath('/home/foo/.ssh/authorized_keys/'))
