/**
 * 参考----flat未实装--时空性能好
 * 了解到--Object.defineProperty()可以给对象添加一个属性并指定该属性的配置。
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  var curr = nums[0].length * nums.length
  if (curr !== r * c) {
    return nums
  }
  var temp=[]
  var res=[]
  nums.forEach((item)=>{
    item.forEach((v)=>{
      temp.push(v)
    })
  })
  for (let i = 0; i <r ; i++) {
    res.push(temp.splice(0,c))
    
  }
  return res
}

matrixReshape(
  [
    [1, 2],
    [3, 4]
  ],
  1,
  4
)

