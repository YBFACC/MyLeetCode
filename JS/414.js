/**
 * 自己----时空性能一般
 * 要求算法时间复杂度必须是O(n)---好像不太符合
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums.sort((a, b) => a - b)
  var temp = [...new Set(nums)]
  var n=temp.length
  if(n<3){
    return temp[n-1]
  }else{
    return temp[n-3]
  }
}
console.log(thirdMax([2,2,3,1]));
