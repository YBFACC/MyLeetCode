/**
 * 自己--过不了
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function (increase, requirements) {
  let temp = [0, 0, 0, 0]
  let in_map = new Map()
  in_map.set(0, temp.slice())
  for (let i = 0; i < increase.length; i++) {
    temp[0] += increase[i][0]
    temp[1] += increase[i][1]
    temp[2] += increase[i][2]
    temp[3] = temp[0] + temp[1] + temp[2]
    in_map.set(i + 1, temp.slice())
  }

  for (let i = 0; i < requirements.length; i++) {
    requirements[i] = [
      requirements[i][0] + requirements[i][1] + requirements[i][2],
      ...requirements[i],
      i
    ]
  }
  requirements.sort((a, b) => a[0] - b[0])
  let res = new Array(requirements.length)
  res.fill(-1)
  let index = 0
  in_map.forEach((v, k) => {
    while (index < requirements.length) {
      if (v[3] < requirements[index][0]) {
        break
      } else {
      }
    }
  })
  return res
}

/**
 * copy--二分法+前缀和
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = (increase, requirements) => {
  let n = increase.length
  let p = new Array(n + 1).fill().map(() => new Array(3).fill(0))
  let res = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      p[i + 1][j] = p[i][j] + increase[i][j]
    }
  }

  for (let d of requirements) {
    let l = -1,
      r = n + 1
    while (l + 1 < r) {
      let mid = ~~((l + r) >> 1)
      if (p[mid][0] >= d[0] && p[mid][1] >= d[1] && p[mid][2] >= d[2]) {
        r = mid
      } else {
        l = mid
      }
    }
    if (r == n + 1) r = -1
    res.push(r)
  }
  return res
}

getTriggerTime(
  [
    [0, 4, 5],
    [4, 8, 8],
    [8, 6, 1],
    [10, 10, 0]
  ],
  [
    [12, 11, 16],
    [20, 2, 6],
    [9, 2, 6],
    [10, 18, 3],
    [8, 14, 9]
  ]
)
