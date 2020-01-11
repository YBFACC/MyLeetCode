/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets1 = function(nums) {
  let res = []
  var func = function(curr, nums, index, res) {
    if(index == nums.length&&curr.length==0){
      res.push([])
      return
    }
    if (index == nums.length) {
      res.push(curr.split(",").map(x=>parseInt(x)))
      return
    }
    if(curr.length<1){
      func(curr + nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    }else{
      func(curr +","+ nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    }
      
    
  }
  func([], nums, 0, res)
  return res
}



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets2 = function(nums) {
  let n = nums.length;
  let tmpPath = [];
  let res = [];
  let backtrack = (tmpPath,start) => {
      res.push(tmpPath);
     for(let i = start;i < n;i++){
         tmpPath.push(nums[i]);
         backtrack(tmpPath.slice(),i+1);
         tmpPath.pop();
     } 
  }
  backtrack(tmpPath,0);
  return res;
}



let nums = [-1, 2, 3]
console.log(new subsets2(nums))
