/*
 * @Author: yubingfeng
 * @Date: 2021-12-10 11:04:03
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-12-13 09:12:18
 * @Description: 参考--词频比较
 */
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const list = licensePlate.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort();
  const n = list.length;
  let res = '';
  let max = 0;
  for (const w of words) {
    const word = w.split('').sort();
    const m = word.length;
    let tmp = 0;
    // 按字典序排序后比较出相同字符数
    for (let i = 0, j = 0; i < n && j < m;) {
      if (list[i] === word[j]) {
        tmp++, i++, j++;
      } else {
        list[i] < word[j] ? i++ : j++;
      }
    }
    // 判断是最短补全词
    if (tmp > max || (tmp === max && word.length < res.length)) {
      res = w;
      max = tmp;
    }
  }
  return res;
};

shortestCompletingWord("tR28607",
  ["present", "fall", "make", "change", "everything", "performance", "owner", "beat", "name", "serve"])