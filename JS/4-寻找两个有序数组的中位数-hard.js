/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

};
// @lc code=end


/**
 * copy
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let result = []
  result = nums1.concat(nums2)
  if(result.length == 1){
      return result[0]
  }
  result.sort((a,b) => a-b)
  if( result.length%2 != 0){
      return result[Math.floor(result.length/2)]
  }
  else{
      return (result[result.length/2]+result[result.length/2-1])/2
  }
}

