//自己--26进制

function titleToNumber(columnTitle: string): number {
  let res = 0
  let Len = columnTitle.length
  for (let i = 0; i < columnTitle.length; i++) {
    res += Math.pow(26, --Len) * (columnTitle[i].charCodeAt(0) - 64)
  }
  return res
};
titleToNumber("FXSHRXW")