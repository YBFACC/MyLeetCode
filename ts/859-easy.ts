/*
 * @Author: yubingfeng
 * @Date: 2021-11-26 11:15:07
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-12-07 15:18:32
 * @Description: 提示--考虑全面情况
 */
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  const set = new Set(s)
  //字符串相等的时候, 只要有重复的元素就返回true
  if (set.size !== s.length && s === goal) return true
  const Len = s.length
  const sList = [], goalList = []
  for (let i = 0; i < Len; i++) {
    if (s[i] !== goal[i]) {
      sList.push(s[i])
      goalList.push(goal[i])
    }
    if (sList.length >= 3) return false
  }
  if (sList.length === 0 || sList.length === 1) return false
  if (sList[0] === goalList[1] && sList[1] === goalList[0]) return true
  return false
};

buddyStrings("aa", "aa")