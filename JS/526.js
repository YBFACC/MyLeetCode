/**
 * 自己---一次过---性能差
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  var res = 0
  var func = function(temp, index) {
    if (index - 1 === N) {
      res++
      return
    }
    for (let i = 1; i <= N; i++) {
      if (temp.includes(i)) continue
      if (i % index === 0 || index % i === 0) {
        temp.push(i)
        index++
        func(temp, index)
        temp.pop()
        index--
      }
    }
  }
  func([], 1)

  return res
}

/**
 * copy--改进数组--性能提高部分
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  let visited = new Array(N+1).fill(false);
  let res = 0;
  let dfs = function(index) {
    if (index > N) {
      ++res;
      return;
    }
    for (let num = 1; num <= N; ++num) {
      if (!visited[num] && (num % index === 0 || index % num === 0)) {
        visited[num] = true;
        dfs(index+1)
        visited[num] = false;
      }
    }
  } 
  dfs(1)
  return res;
};


countArrangement(2)
