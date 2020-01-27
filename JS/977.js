/**
 * 自己---js函数秒杀---性能一般
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = A => A.map(e => Math.pow(e, 2)).sort((a, b) => a - b)
console.log(sortedSquares([-7, -3, 2, 3, 11]))
