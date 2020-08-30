//自己--二分变形分治
function findString(words: string[], s: string): number {

  function helper(i: number, j: number): number {
    let left = i
    let right = j
    while (left <= right) {
      const mid = (left + right) >> 1
      if (words[mid] === '') {
        const temp1 = helper(left, mid - 1)
        const temp2 = helper(mid + 1, right)
        if (temp1 !== -1) {
          return temp1
        } else if (temp2 !== -1) {
          return temp2
        } else return -1
      } else {
        if (words[mid] === s) return mid
        if (words[mid] > s) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
    }
    return -1
  }
  return helper(0, words.length - 1)
};


console.log(findString(["DirNnILhARNS hOYIFB", "SM ", "YSPBaovrZBS", "evMMBOf", "mCrS", "oRJfjw gwuo", "xOpSEXvfI"]
  , "mCrS"))