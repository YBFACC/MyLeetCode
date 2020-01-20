/**
 * 参考
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let index = 0; index < nums.length; index++) {
    if(nums[index]===nums[index+1]){
      nums.splice(index,1)
      index--
    }
  }
  return nums.length
}

/**
 * copy
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length === 0) return 0;
  var newIndex=0;
  for(let i=0,j=nums.length;i<j;i++){
      if(nums[newIndex]!==nums[i]){
          newIndex++;
          nums[newIndex]=nums[i];
      }       
  }
  return newIndex+1;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])


