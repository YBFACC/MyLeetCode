/*
 * @lc app=leetcode.cn id=1154 lang=typescript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
//copy--easy
/**
* @param {string} date
* @return {number}
*/
var dayOfYear = function (date: string): number {
  const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [year, month, day] = date.split('-');
  let dayNum = 0;
  for (let i = 0; i < parseInt(month, 10) - 1; i++) {
    dayNum += dayList[i];
  }
  dayNum += parseInt(day, 10);
  if (parseInt(year, 10) % 4 === 0 && parseInt(year, 10) % 100 !== 0) {
    if (parseInt(month, 10) > 2) {
      dayNum += 1;
    }
  }
  return dayNum;
};

// @lc code=end

dayOfYear("2019-01-09")