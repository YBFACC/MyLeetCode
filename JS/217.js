/**
 * 去重后的数组长度和原数组长度比较----内存消耗大
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var index = [...new Set(nums)]

  return index.length===nums.length?false:true
}

console.log(containsDuplicate([1,2,3,4]))
