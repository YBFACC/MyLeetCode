/**
 * copy--表格分区
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  /**
   * 1. 求leftSum
   * 2. 求rightSum，顺便计算结果
   */
  let leftSum = []
  let leftTemp = 1
  //得到leftSum
  for (let i = 0; i < a.length; i++) {
    leftTemp = leftTemp * (i === 0 ? 1 : a[i - 1])
    leftSum.push(leftTemp)
  }
  //计算rightSum
  // 每个数右边的乘积和，从右边开始乘，所以需要从右往左循环
  let j = a.length - 1
  let res = []
  let rightTemp = 1
  while (j >= 0) {
    rightTemp = rightTemp * (j === a.length - 1 ? 1 : a[j + 1])
    //res[j] = rightSum[j] => rightTemp  * leftSum[j]
    res[j] = rightTemp * leftSum[j]
    j--
  }
  return res
}

constructArr([1, 2, 3, 4, 5])
