/*
 * @lc app=leetcode.cn id=483 lang=typescript
 *
 * [483] 最小好进制
 */

//copy--数学二项定理

// @lc code=start
var smallestGoodBase = function (n: string): string {
  const nVal = parseInt(n);
  for (let m = 59; m > 1; m--) {
    const k = BigInt(Math.floor(Math.pow(nVal, 1.0 / m)));
    if (k > 1) {
      let mul = BigInt(1), sum = BigInt(1);
      for (let i = 1; i <= m; i++) {
        mul *= k;
        sum += mul;
      }
      if (sum === BigInt(n)) {
        return k + '';
      }
    }
  }
  return (BigInt(n) - BigInt(1)) + '';
};

// @lc code=end

