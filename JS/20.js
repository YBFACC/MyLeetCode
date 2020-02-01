/**
 * 自己---没完成--这样写的栈烂
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var arr = s.split('')
  var temp = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
      temp.push(arr[i])
    }
    if (arr[i] === ')' || arr[i] === ']' || arr[i] === '}') {
    }
  }
  return
}

/**
 * 参考---简单粗暴--性能差
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var len = s.length
  while (len - 1) {
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
    len--
  }
  return s.length === 0
}
/**
 * copy---栈--时间性能差
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function(s) {
  var Json = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  var stack = []
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i)
    if (c in Json) {
      var template = stack.length != 0 ? stack.pop() : '#'
      if (template !== Json[c]) {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return stack.length == 0
}


/**
 * copy---栈--性能好
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s === '') return true
  const map = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  const arr = []
  for(let i = 0; i < s.length; i++){
      const str = s[i]
      if(map[str]){
          arr.push(str)
      }else{
          const arrLast = arr.pop()
          if(map[arrLast] !==str){
              return false
          }
      }
  }
  return !arr.length
};
console.log(isValid1('()(]'))
