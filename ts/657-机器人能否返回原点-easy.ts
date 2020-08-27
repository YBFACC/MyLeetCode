/*
 * @lc app=leetcode.cn id=657 lang=typescript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
//自己--easy
//[x,y]
function judgeCircle(moves: string): boolean {
  const prints = [0, 0]

  for (let i = 0; i < moves.length; i++) {
    const item = moves[i]
    if (item === 'R') {
      prints[0]++
    } else if (item === 'L') {
      prints[0]--
    } else if (item === 'U') {
      prints[1]++
    } else {
      prints[1]--
    }
  }
  return prints[0] === 0 && prints[1] === 0
}
// @lc code=end
console.log(judgeCircle('UD'))
