/*
 * @lc app=leetcode.cn id=1239 lang=typescript
 *
 * [1239] 串联字符串的最大长度
 */

//提示--深搜
//数量不需要减枝，26长度的数组来统计字母的出现

// @lc code=start
function maxLength(arr: string[]): number {
  let res = 0
  const list = Array.from({ length: 26 }, () => 0)
  const Len = arr.length
  const dfs = function (index: number, temp: number[]) {
    res = Math.max(res, count(temp))
    if (index >= Len) return

    dfs(index + 1, temp.slice())
    let floor = add(arr, index, temp)
    if (!floor) return
    dfs(index + 1, temp.slice())
    return
  }
  dfs(0, list)
  return res
};

function add(arr: string[], index: number, temp: number[]): boolean {
  const str = arr[index]
  for (let i = 0; i < str.length; i++) {
    const num = str[i].charCodeAt(0) - 97
    if (temp[num] === 1) {
      return false
    }
    temp[num] = 1
  }

  return true
}

function count(temp: number[]): number {
  let _count = 0
  temp.forEach((v) => _count += v)
  return _count
}

// @lc code=end
maxLength(["cha", "r", "act", "ers"])