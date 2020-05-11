/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * 自己--正则-也可以用split()
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  if (cpdomains.length === 0) return []
  let three = /\w+\.\w+\.\w+$/
  let two = /\w+\.\w+$/
  let one = /\w+$/
  let num = /^\d+/
  let map = new Map()
  for (let i = 0; i < cpdomains.length; i++) {
    let item = cpdomains[i]
    let Num = parseInt(item.match(num)[0], 10)

    let Three = item.match(three)
    Three &&
      map.set(Three[0], map.has(Three[0]) ? map.get(Three[0]) + Num : Num)

    let Two = item.match(two)
    Two && map.set(Two[0], map.has(Two[0]) ? map.get(Two[0]) + Num : Num)

    let One = item.match(one)
    One && map.set(One[0], map.has(One[0]) ? map.get(One[0]) + Num : Num)
  }
  let res = []
  map.forEach((v, k) => {
    res.push(`${v} ${k}`)
  })
  return res
}
// @lc code=end
console.log(
  subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org'
  ])
)
