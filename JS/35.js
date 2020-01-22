/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var res = nums.indexOf(target)
  if (res !== -1) {
    return res
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]<target) {
      res=i
    }else{
      break;
    }
  }
  return res+1
}

console.log(searchInsert([1,3,5,6],));
