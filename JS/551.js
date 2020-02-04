/**
 * 自己--正则--性能一般
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  var numA = s.match(/[A]/g)
  var numL = s.match(/[L]{3,}/g)
  return (numA === null ? true : numA.length < 2) && numL === null
}

/**
 * copy---精炼版
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return !s.match(/.*(A.*A|LLL).*/)
};

console.log(checkRecord("PPALLP"))
