/**
 * 参考--秒杀
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  return [
    ...nums.filter((v) => v % 2 === 1),
    ...nums.filter((v) => v % 2 === 0),
  ]
}
