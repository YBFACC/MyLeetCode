/*
 * @lc app=leetcode.cn id=1074 lang=typescript
 *
 * [1074] 元素和为目标值的子矩阵数量
 */

//参考--二维前缀和

// @lc code=start
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  let row = matrix.length, col = matrix[0].length
  const list = Array.from({ length: row + 1 }, () => Array.from({ length: col + 1 }, () => 0))
  for (let x2 = 1; x2 <= row; x2++) {
    for (let y2 = 1; y2 <= col; y2++) {
      list[x2][y2] = list[x2][y2 - 1] + list[x2 - 1][y2] - list[x2 - 1][y2 - 1] + matrix[x2 - 1][y2 - 1]
    }
  }

  let res = 0
  for (let x2 = 1; x2 <= row; x2++) {
    for (let y2 = 1; y2 <= col; y2++) {
      const all = list[x2][y2]
      for (let x1 = 1; x1 <= x2; x1++) {
        for (let y1 = 1; y1 <= y2; y1++) {
          const floor = all - list[x1 - 1][y2] - list[x2][y1 - 1] + list[x1 - 1][y1 - 1]
          if (floor === target) res++
        }
      }
    }
  }

  return res
};
// @lc code=end


//容斥原理:先不考虑重叠的情况，把包含于某内容中的所有对象的数目先计算出来，然后再把计数时重复计算的数目排斥出去，使得计算的结果既无遗漏又无重复.
//容斥原理指的是这种分割计算矩形的方法

//固定上下边,不断的移动一条边，curr-pre 得到目标值区间，转化为一维前缀和

function _numSubmatrixSumTarget(matrix: number[][], target: number): number {
  let row = matrix.length, col = matrix[0].length
  const list = Array.from({ length: row + 1 }, () => Array.from({ length: col + 1 }, () => 0))
  for (let x2 = 1; x2 <= row; x2++) {
    for (let y2 = 1; y2 <= col; y2++) {
      list[x2][y2] = list[x2][y2 - 1] + list[x2 - 1][y2] - list[x2 - 1][y2 - 1] + matrix[x2 - 1][y2 - 1]
    }
  }

  let res = 0
  for (let top = 1; top <= row; top++) {
    for (let bot = top; bot <= row; bot++) {
      let cur = 0
      const map = new Map()
      for (let r = 1; r <= col; r++) {
        cur = list[bot][r] - list[top - 1][r]
        if (cur === target) res++
        if (map.has(cur - target)) res += map.get(cur - target)
        map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1)
      }
    }
  }

  return res
};

numSubmatrixSumTarget([[0, 1, 0], [1, 1, 1], [0, 1, 0]], 0)