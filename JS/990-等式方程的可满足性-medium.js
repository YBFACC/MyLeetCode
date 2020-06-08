/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * 参考--查并集--findroot
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let findset = new MergeFindSet()
  for (const e of equations) {
    if (e[1] === '=') {
      findset.merge(e[0], e[3])
    }
  }
  for (const e of equations) {
    if (e[1] === '!' && findset.find(e[0]) === findset.find(e[3])) {
      return false
    }
  }
  return true
}

function MergeFindSet() {
  this.code = {}
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(97 + i)
    this.code[char] = char
  }
}

MergeFindSet.prototype.merge = function (e1, e2) {
  let e1_father = this.find(e1)
  let e2_father = this.find(e2)
  if (e1_father === e2_father) {
    return
  }
  this.code[e1_father] = e2_father
}

MergeFindSet.prototype.find = function (e) {
  let e_father = e
  while (this.code[e_father] !== e_father) {
    e_father = this.code[e_father]
  }
  return this.code[e_father]
}
// @lc code=end

equationsPossible(['a==b', 'b!=c', 'c==a'])
