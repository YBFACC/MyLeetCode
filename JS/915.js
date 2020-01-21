/**
 * 参考---时空性能棒
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  var curMax = A[0]
  var leftMax = A[0]
  var index = 0
  for (let i = 0; i < A.length; i++) {
    if(leftMax<A[i]){
      curMax=Math.max(curMax,A[i])
    }else if(leftMax>A[i]){
      index=i
      leftMax=curMax
    }
  }
  return index+1
}
partitionDisjoint([5, 0, 3, 8, 6])
