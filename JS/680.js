/**
 * 自己--优化了还是性能不行--还冗长
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let arr = s.split('')
  let str1 = arr.slice()
  let str2 = arr.slice()
  let start
  let end
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] === arr[j]) {
      if (i === j || i === j - 1) return true
      continue
    } else {
      str1.splice(i, 1)
      str2.splice(j, 1)
      start = i
      end = j
      break
    }
  }
  for (let s = start, e = end - 1; s <= e; s++, e--) {
    if (str1[s] !== str1[e]) {
      break
    } else if (s === e || s === e - 1) {
      return true
    }
  }
  for (let s = start, e = end - 1; s <= e; s++, e--) {
    if (str2[s] !== str2[e]) {
      break
    } else if (s === e || s === e - 1) {
      return true
    }
  }
  return false
}




/**
 * copy---性能好
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let count = 1;

  function check(left, right) {
      for (; left < right; ++left, --right) {
          if (s[left] === s[right]) {
              continue;
          }
          if (count < 1) {
              return false;
          }
          --count;
          return check(left, right - 1) || check(left + 1, right);
      }
      return true;
  }
  
  return check(0, s.length - 1);
};
console.log(validPalindrome('aba'))
