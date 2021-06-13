/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

//参考--二分
//无聊的题，意义不明

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 0, right = n
    while (left < right) {
      const mid = left + Math.trunc((right - left) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  };
};
// @lc code=end

