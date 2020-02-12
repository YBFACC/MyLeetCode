/**
 * 自己--正则--性能好
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var isTrue = str.trimStart().match(/^[0-9-+]/)
  var num = str.match(/(?:\-|\+|[0-9])[0-9]*/)
  if (num === null || isTrue === null) return 0
  var number = Number(num[0])
  if (Number.isNaN(number)) return 0
  var max = Math.pow(2, 31) - 1
  var min = Math.pow(2, 31) * -1
  if (max < number) {
    return max
  } else if (min > number) {
    return min
  }
  return number
}

/**
 * 参考版--改进了对match函数对使用
 * match()
 * 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
 * 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性。
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var num = str.trimStart().match(/^(\-|\+)?\d+/g)
  if (num === null) return 0
  var number = Number(num[0])
  var max = Math.pow(2, 31) - 1
  var min = Math.pow(2, 31) * -1
  if (max < number) {
    return max
  } else if (min > number) {
    return min
  }
  return number
}
console.log(myAtoi('-5-'))
