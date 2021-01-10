/*
 * @lc app=leetcode.cn id=1447 lang=typescript
 *
 * [1447] 最简分数
 */

//自己--暴力生成--gcd判断是否最简

// @lc code=start

const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

function simplifiedFractions(n: number): string[] {
  const set: Set<string> = new Set()
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      const temp = gcd(i, j)
      if (temp !== 1) {
        const _i = i % temp
        const _j = j % temp
        if (_j === 0) continue
        set.add(_j + '/' + _i)
      } else {
        set.add(j + '/' + i)
      }
    }
  }

  return [...set]
};
// @lc code=end

console.log(simplifiedFractions(2))