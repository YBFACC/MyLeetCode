/**
 * 自己---一遍过--灵感来自893题--性能差
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var res = []
  var arr = strs.map(v => {
    return v
      .split('')
      .sort()
      .join('')
  })
  for (let i = 0; i < arr.length; i++) {
    let temp = []
    let str = arr[i]
    if (str !== '#') {
      temp.push(strs[i])
      arr[i] = '#'
    } else {
      continue
    }
    while (true) {
      let index = arr.indexOf(str)
      if (index === -1) {
        break
      } else {
        arr[index] = '#'
        temp.push(strs[index])
      }
    }
    res.push(temp)
  }
  return res
}


/**
 * copy--map的values可以用数组--性能好
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hash = new Map()
   
  for(let i = 0; i < strs.length; i++) {
      let str = strs[i]
      let arr = Array(26).fill(0)
      for(let j = 0; j < str.length; j++) {
          arr[str.charCodeAt(j) - 97] ++
      }
      let hashKey = arr.join()
      if(hash.has(hashKey)) {
          let temp = hash.get(hashKey)
          temp.push(str)
          hash.set(hashKey, temp)
      } else {
          hash.set(hashKey, [str])
      }
  }
  return hash.values()
};

// 作者：zhl1232
// 链接：https://leetcode-cn.com/problems/group-anagrams/solution/js-xie-leetcode-by-zhl1232-3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

