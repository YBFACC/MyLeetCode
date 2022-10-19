
/**
 * 自己－－ｄｐ
 * 写复杂了--滑动窗口更简单
 * @param fruits 
 * @returns 
 */
function totalFruit(fruits: number[]): number {
  const Len = fruits.length
  const lastDp = [fruits[0], 1, -1, 0]

  let res = 1
  let i = 1
  for (; i < Len; i++) {
    const currFruit = fruits[i]
    if (currFruit === lastDp[0]) {
      lastDp[1]++
    } else if (currFruit !== lastDp[2]) {
      lastDp[2] = currFruit
      lastDp[3] = 1
      i++
      res = Math.max(res, lastDp[1] + lastDp[3])
      break
    }
    res = Math.max(res, lastDp[1] + lastDp[3])
  }

  let lastIndex = 0

  for (; i < Len; i++) {
    const currFruit = fruits[i]
    if (currFruit === lastDp[0]) {
      lastDp[1]++
    } else if (currFruit === lastDp[2]) {
      lastDp[3]++
    } else {
      for (; lastIndex < i; lastIndex++) {
        const lastFruit = fruits[lastIndex]
        if (lastFruit === lastDp[0]) {
          lastDp[1]--
        } else if (lastFruit === lastDp[2]) {
          lastDp[3]--
        }

        if (lastDp[1] === 0) {
          lastDp[0] = lastDp[2]
          lastDp[1] = lastDp[3]
          lastDp[2] = currFruit
          lastDp[3] = 1
          break
        }
        if (lastDp[3] === 0) {
          lastDp[2] = currFruit
          lastDp[3] = 1
          break
        }
      }
    }
    res = Math.max(res, lastDp[1] + lastDp[3])
  }

  return res
};


totalFruit([1, 0])
totalFruit([1, 2, 1]) //3
totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]) //5