/**
 * 参考--愣是没有看懂题目-贪心
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
  let arr_s1 = s1.split('')
  let arr_s2 = s2.split('')
  arr_s1.sort()
  arr_s2.sort()
  let s1_true = true
  let s2_true = true
  for (let i = 0; i < arr_s1.length; i++) {
    if (arr_s1[i] > arr_s2[i]) {
      s1_true = false
    }
    if (arr_s1[i] < arr_s2[i]) {
      s2_true = false
    }
  }

  return s1_true || s2_true
}


