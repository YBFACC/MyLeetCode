/**
 * 参考--逐位统计
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let list = Array.from({ length: 32 }, () => 0)
  let res = 0
  for (const num of nums) {
    let temp = 1
    for (let i = 31; i >= 0; i--) {
      if ((num & temp) !== 0) list[i]++
      temp = temp << 1
    }
  }
  for (let i = 0; i < 32; i++) {
    res = res << 1
    res += list[i] % 3
  }
  return res
}

singleNumber([9, 1, 7, 9, 7, 9, 7])
