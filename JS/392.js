/**
 * 自己--超时
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 5198
 */
var isSubsequence = function(s, t) {
  var temp = t.split('')
  var start = 0
  for (let i = 0; i < s.length; ) {
    let index = temp.findIndex((value, index) => {
      if (value === s[i]) {
        temp[index] = 1
        return true
      }
    })
    if (index === -1) {
      return false
    } else if (index < start) {
      continue
    }

    start = index
    i++
  }
  return true
}
console.log(isSubsequence())



/**
 * copy---双指针---性能一般
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  //双指针
  let i=0,j=0;
  if(s.length ==0) return true;
  while(j<=t.length){
      if(s[i]==t[j]){
          i++;j++;
          if(i==s.length && j<=t.length) return true;
      }else{
          j++
      }      
  }
  return false;
};
