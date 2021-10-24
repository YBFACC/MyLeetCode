/*
 * @Author: yubingfeng
 * @Date: 2021-10-20 16:15:16
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-20 16:57:59
 * @Description: 描述
 */
function addOperators(num: string, target: number): string[] {
  let list = [
    num[0] + '+',
    num[0] + '-',
    num[0] + '*',
    num[0]
  ],
    res: string[] = []
  const Len = num.length
  for (let i = 1; i < Len; i++) {
    const temp = []
    for (const item of list) {
      temp.push(item + num[i])
    }
    list = temp
  }
  return res
};

addOperators("3456237490", 9191)