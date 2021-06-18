/*
 * @lc app=leetcode.cn id=1442 lang=typescript
 *
 * [1442] 形成两个异或相等数组的三元组数目
 */

//参考--前缀和
//a=Si​⊕Sj ​b=Sj​⊕Sk+1​​ a=b
//注意推导

// @lc code=start
function countTriplets(arr: number[]): number {
  const Len = arr.length
  const s = [0];
  for (const num of arr) {
    s.push(s[s.length - 1] ^ num);
  }
  let res = 0
  const cnt = new Map(), total = new Map();

  for (let k = 0; k < Len; k++) {
    if (cnt.has(s[k + 1])) {
      res += k * cnt.get(s[k + 1]) - total.get(s[k + 1])
    }
    cnt.set(s[k], cnt.has(s[k]) ? cnt.get(s[k]) + 1 : 1);
    total.set(s[k], total.has(s[k]) ? total.get(s[k]) + k : k);
  }

  return res
};
// @lc code=end

console.log(countTriplets([2, 3, 1, 6, 7]))