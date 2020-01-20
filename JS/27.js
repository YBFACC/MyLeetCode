// /**
//  * 自己---改自26---时空一般
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] === val) {
//       nums.splice(index, 1)
//       index--
//     }
//   }
//   return nums.length
// }


/**
 * copy---性能棒---快慢双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var index=0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]!==val){
      nums[index]=nums[i]
      index++
    }
  }
  return index
};
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
