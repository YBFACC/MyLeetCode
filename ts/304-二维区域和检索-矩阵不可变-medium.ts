/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
//自己--对每行进行前缀和操作--注意判空
class NumMatrix {
  prefix: number[][]
  MaxRow: number = 0
  MaxCol: number = 0
  constructor(matrix: number[][]) {
    this.prefix = []
    const prefix = this.prefix
    this.MaxRow = matrix.length
    if (this.MaxRow === 0) return
    this.MaxCol = matrix[0].length
    for (let i = 0; i < this.MaxRow; i++) {
      prefix[i] = [0]
      for (let j = 0; j < this.MaxCol; j++) {
        const last = prefix[i][prefix[i].length - 1]
        prefix[i].push(last + matrix[i][j])
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const prefix = this.prefix
    if (row1 >= this.MaxRow || row2 >= this.MaxRow || col1 >= this.MaxCol || col2 >= this.MaxCol) return 0
    let sum = 0
    for (let i = row1; i <= row2; i++) {
      sum += prefix[i][col2 + 1] - prefix[i][col1]
    }
    return sum
  }
}

// @lc code=end

var obj = new NumMatrix([])
var param_1 = obj.sumRegion(2, 1, 4, 3)
console.log()