/**
 * 周赛-参考--BigInt-递归求幂--子序列不要求顺序
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  let mod = BigInt(10 ** 9 + 7)
  nums.sort((a, b) => a - b)
  let left = 0
  let rifht = nums.length - 1
  let res = 0n
  while (left <= rifht) {
    if (nums[left] + nums[rifht] <= target) {
      res = (res + pow(rifht - left)) % mod
      left++
    } else {
      rifht--
    }
  }
  function pow(n) {
    if (n === 0) return BigInt(1)
    let chlid = pow(Math.trunc(n / 2)) % mod

    return n % 2 === 0
      ? BigInt(chlid) * BigInt(chlid)
      : BigInt(chlid) * BigInt(chlid) * 2n
  }
  return res
}

console.log(
  numSubseq(
    [
      9,
      25,
      9,
      28,
      24,
      12,
      17,
      8,
      28,
      7,
      21,
      25,
      10,
      2,
      16,
      19,
      12,
      13,
      15,
      28,
      14,
      12,
      24,
      9,
      6,
      7,
      2,
      15,
      19,
      13,
      30,
      30,
      23,
      19,
      11,
      3,
      17,
      2,
      14,
      20,
      22,
      30,
      12,
      1,
      11,
      2,
      2,
      20,
      20,
      27,
      15,
      9,
      10,
      4,
      12,
      30,
      13,
      5,
      2,
      11,
      29,
      5,
      3,
      13,
      22,
      5,
      16,
      19,
      7,
      19,
      11,
      16,
      11,
      25,
      29,
      21,
      29,
      3,
      2,
      9,
      20,
      15,
      9
    ],
    32
  )
)
