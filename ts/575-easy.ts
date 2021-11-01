/*
 * @Author: yubingfeng
 * @Date: 2021-11-01 08:50:08
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-01 08:53:18
 * @Description: 自己--重做--取少的
 */


function distributeCandies(candyType: number[]): number {
  const kind = new Set(candyType)
    , half = candyType.length / 2
  if (half >= kind.size) {
    return kind.size
  }
  return half
};