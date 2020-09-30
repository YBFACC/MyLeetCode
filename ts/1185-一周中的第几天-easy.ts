/*
 * @lc app=leetcode.cn id=1185 lang=typescript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
//参考--背公式或者朴素
function dayOfTheWeek(day: number, month: number, year: number): string {
  const weekStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let sum = 4 + day
  for (let i = 1971; i < year; i++) {
    sum += 365;
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) sum++;
  }

  for (let i = 0; i < month - 1; i++) sum += months[i];
  if (month >= 3 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) sum++;

  return weekStr[sum % 7]
};
// @lc code=end

