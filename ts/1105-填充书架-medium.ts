//参考--dp双循环向前试探
function minHeightShelves(books: number[][], shelf_width: number): number {
  const Len = books.length
  const dp = Array.from({ length: Len + 1 }, (v, k) => Infinity)
  dp[0] = 0
  for (let i = 1; i <= Len; i++) {
    let curr_width = 0
    let curr_height = 0
    for (let j = i; j > 0; j--) {
      curr_height = Math.max(curr_height, books[j - 1][1])
      curr_width += books[j - 1][0]
      if (curr_width > shelf_width) {
        break
      }
      dp[i] = Math.min(dp[i], curr_height + dp[j - 1])
    }
  }
  return dp[Len]
};
//4
console.log(minHeightShelves([[1, 3], [2, 4], [3, 2]], 6))
//6
console.log(minHeightShelves([[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]], 4))