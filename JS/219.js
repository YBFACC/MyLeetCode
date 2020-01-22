/**
 * 参考----遍历一遍，使用Map存储原始值的最新下标，当遇到重复的value，比较下标差是否不大于k即可
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hash=new Map()
    for (let i = 0; i < nums.length; i++) {
      if(hash.has(nums[i])){
        if(i-hash.get(nums[i])<=k){
          return true
        }else{
          hash.delete(nums[i])
        }
      }
      hash.set(nums[i],i)
    }
    return false
};