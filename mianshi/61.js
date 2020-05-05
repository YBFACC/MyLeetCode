/**
 * 自己--easy
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let find_zore = 0
  nums = nums.filter(item => {
    if (item === 0) {
      find_zore++
      return false
    } else {
      return true
    }
  })
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) {
      continue
    } else {
      if (find_zore > 0) {
        find_zore--
        nums[i - 1]++
        i--
        continue
      } else {
        return false
      }
    }
  }
  return true
}

isStraight([0, 0, 1, 4, 5])
