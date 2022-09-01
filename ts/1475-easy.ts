
/**
 * 提示－－单调栈
 * 栈顶的元素即为右边第一个小于 prices[i] 的元素
 * @param prices 
 * @returns 
 */

function finalPrices(prices: number[]): number[] {
  const stack: number[] = [],
    Len = prices.length
  for (let i = Len - 1; i >= 0; i--) {
    const value = prices[i]

    while (stack.length > 0) {
      if (stack[stack.length - 1] <= value) {
        prices[i] = value - stack[stack.length - 1]
        break
      } else {
        stack.pop()
      }
    }

    stack.push(value)
  }

  return prices
};

finalPrices([8, 4, 6, 2, 3])