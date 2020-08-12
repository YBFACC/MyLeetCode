/**
 * 参考--代码臭长
 * 都是从右往左
 * 下一个大值：找到01变成10，将右侧所有1移到低位，剩下0补齐
 * 下一个小值：找到10变成01，将右侧所有1移到高位，剩下0补齐
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  let list = Array.from({ length: 32 }, () => 0)
  const res = [-1, -1]
  let index = 31
  while (num > 0) {
    if (num & 1) {
      list[index] = 1
    }
    index--
    num >>= 1
  }
  const list1 = list.slice()
  let min1 = 31
  let count1 = 0
  while (min1 > 0) {
    if (list1[min1] === 0 && list1[min1 - 1] === 1) {
      list1[min1] = 1
      list1[min1 - 1] = 0

      let min2 = min1 + 1

      while (min2 < 32) {
        if (count1 > 0) {
          list1[min2] = 1
          count1--
        }
        min2++
      }
      res[1] = parseInt(list1.join(''), 2)
      break
    } else if (list1[min1] === 1) {
      count1++
      list1[min1] = 0
    }

    min1--
  }

  const list2 = list.slice()
  let max1 = 31
  let count2 = 0
  while (max1 >= 0) {
    if (list2[max1] === 1 && list2[max1 - 1] === 0) {
      list2[max1] = 0
      list2[max1 - 1] = 1
      let max2 = 31
      while (max2 > max1) {
        if (count2 > 0) {
          list2[max2] = 1
          count2--
        }
        max2--
      }
      res[0] = parseInt(list2.join(''), 2)
      break
    } else if (list2[max1] === 1) {
      count2++
      list2[max1] = 0
    }
    max1--
  }

  return res
}

findClosedNumbers(1837591841)
