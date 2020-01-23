/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  nums1.sort((a, b) => a - b)
  return
}

var merge = function(nums1, m, nums2, n) {
  nums1 = [...nums2, ...nums1].filter(v => v !== 0).sort((a,b)=>a-b)
  //console.log(111);
  
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
