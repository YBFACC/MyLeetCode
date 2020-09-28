/*
 * @lc app=leetcode.cn id=997 lang=typescript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
//copy--找到入度N-1和出度0度节点
const findJudge = (N: number, trust: number[][]): number => {
  var inDegree = new Array(N).fill(0);
  var outDegree = new Array(N).fill(0);

  for (var i = 0; i < N; i++) {
    inDegree[i] = 0;
    outDegree[i] = 0;
  }

  for (var i = 0; i < trust.length; i++) {
    inDegree[trust[i][1] - 1]++;
    outDegree[trust[i][0] - 1]++;
  }

  for (var i = 0; i < N; i++) {
    if ((inDegree[i] == (N - 1)) &&
      (outDegree[i] == 0)) {
      return (i + 1);
    }
  }
  return -1;
};

// @lc code=end

