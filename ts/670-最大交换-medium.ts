/*
 * @lc app=leetcode.cn id=670 lang=typescript
 *
 * [670] 最大交换
 */

//自己--贪心
//高位与大于自己的低位进行交换
//如果低位存在并有多个，挑最右边那个

// @lc code=start
function maximumSwap(num: number): number {
  const str = num + ''
  const Len = str.length
  const list: number[][] = Array.from({ length: 10 }, () => [])
  for (let i = 0; i < Len; i++) {
    list[+str[i]].push(i)
  }

  for (let i = 0; i < Len; i++) {
    const curr = +str[i]
    for (let j = 9; j >= 0; j--) {
      const index_list = list[j]
      while (index_list.length > 0 &&
        index_list[index_list.length - 1] <= i) {
        index_list.pop()
      }
      if (index_list.length > 0) {
        const target = index_list[index_list.length - 1]
        const temp = swap(i, target, str)
        if (temp > num) {
          return temp
        }
      }
    }
  }

  return num
};

function swap(x: number, y: number, str: string): number {
  const list = str.split('');
  ;[list[x], list[y]] = [list[y], list[x]]
  return new Number(list.join('')).valueOf()
}
// @lc code=end

console.log(maximumSwap(100044008))