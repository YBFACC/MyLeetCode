/**
 * 自己--好多判断😠--性能一遍
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var count = 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char === 'I') {
      if (s[i + 1] === 'V') {
        count += 4
        i++
        continue
      }
      if (s[i + 1] === 'X') {
        count += 9
        i++
        continue
      }
    }
    if (char === 'X') {
      if (s[i + 1] === 'L') {
        count += 40
        i++
        continue
      }
      if (s[i + 1] === 'C') {
        count += 90
        i++
        continue
      }
    }
    if (char === 'C') {
      if (s[i + 1] === 'D') {
        count += 400
        i++
        continue
      }
      if (s[i + 1] === 'M') {
        count += 900
        i++
        continue
      }
    }
    switch (char) {
      case 'M':
        count += 1000
        break
      case 'D':
        count += 500
        break
      case 'C':
        count += 100
        break
      case 'L':
        count += 50
        break
      case 'X':
        count += 10
        break
      case 'V':
        count += 5
        break
      case 'I':
        count += 1
    }
  }

  return count
}
romanToInt("DCXXI")

//感觉这个想法好
// class Solution {
//   public:
//       int romanToInt(string s) {
//           map<char, int> table = {
//               {'I', 1},
//               {'V', 5},
//               {'X', 10},
//               {'L', 50},
//               {'C', 100},
//               {'D', 500},
//               {'M', 1000}
//           };
  
//           int ans = 0;
//           int len = s.size();
//           for(int i = 0; i < len-1; i++){
//               if(table[s[i]] >= table[s[i+1]]){
//                   //左边>=右边时，等于加上他的原值
//                   ans += table[s[i]];
//               }else{
//                   //左边<右边时，相当于加上他的负值
//                   ans += -table[s[i]];
//               }
//           }
//           ans += table[s[len-1]];
//           return ans;
//       }
//   };
