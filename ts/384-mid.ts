/*
 * @Author: yubingfeng
 * @Date: 2021-11-22 11:05:24
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-26 10:38:40
 * @Description: 参考--洗牌算法
 */

class Solution {
  initList: number[]
  constructor(nums: number[]) {
    this.initList = nums
  }

  reset(): number[] {
    return this.initList
  }

  shuffle(): number[] {
    const res = this.initList.slice()
    for (let i = 0; i < res.length; i++) {
      this.swap(res, i, Math.floor(Math.random() * (res.length - i)) + i)
    }
    return res
  }
  swap(list: number[], x: number, y: number) {
    [list[x], list[y]] = [list[y], list[x]]
  }
}