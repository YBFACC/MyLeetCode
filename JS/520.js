/**
 * 参考--正则表达式--性能一般
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return /^([A-Z][a-z]+|[a-z]+|[A-Z]+)$/.test(word)
}

console.log(detectCapitalUse('Wcse'));

