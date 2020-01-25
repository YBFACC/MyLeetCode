/**
 * copy--性能一般--正则
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  return /^(10|11|0)*0$/.test(bits.join(''));
};

