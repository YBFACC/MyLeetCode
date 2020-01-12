/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup1 = function(nums) {
  let res = []
  nums = nums.sort((a, b) => {
    return a - b
  })
  var func = function(curr, nums, index, res) {
    if (index == nums.length && curr.length == 0) {
      res.push([])
      return
    } else if (index == nums.length) {
      let temp = curr.split(',').map(x => parseInt(x))

      if (res.find(e => JSON.stringify(e) === JSON.stringify(temp))) {
        return
      } else {
        res.push(temp)
        return
      }
    }
    if (curr.length < 1) {
      func(curr + nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    } else {
      func(curr + ',' + nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    }
  }
  func([], nums, 0, res)
  return res
}

var subsetsWithDup2 = function(nums) {
  let n = nums.length
  nums = nums.sort((a, b) => {
    return a - b
  })
  let tmpPath = []
  let res = []
  let hash = {}
  let backtrack = (tmpPath, start) => {
    res.push(tmpPath)
    for (let i = start; i < n; i++) {
      if (hash[i] || (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i])) continue
      hash[i] = true
      tmpPath.push(nums[i])
      backtrack(tmpPath.slice(), i + 1)
      hash[i] = false
      tmpPath.pop()
    }
  }
  backtrack(tmpPath, 0)
  return res
}

var subsetsWithDup = function(nums) {
  let n = nums.length;
  nums = nums.sort((a,b) => {return a - b});
  let start = 1;
  let res = [[]];
  for(let i = 0;i < nums.length;i++){
      let len = res.length;
      let resTmp = [];
      for(let j = 0;j < len;j++){
          if(i > 0  && j < start && nums[i-1] == nums[i]) continue;
          resTmp.push(res[j].concat([nums[i]]));
      }
      start = res.length;
      res.push(...resTmp);
  }
  return res;
};

let nums = [1, 4, 5]
console.log(new subsetsWithDup3(nums))
