/**
 * 自己--Number("str")格式化字符串去除前导0--性能好
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var arr1 = version1.split('.')
  var arr2 = version2.split('.')
  var len1 = 0
  var len2 = 0
  while (len1 < arr1.length || len2 < arr2.length) {
    let num1 = len1 < arr1.length ? Number(arr1[len1]) : 0
    let num2 = len2 < arr2.length ? Number(arr2[len2]) : 0
    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
    len1++
    len2++
  }
  return 0
}
compareVersion('0.001.1', '01.1.0001')
