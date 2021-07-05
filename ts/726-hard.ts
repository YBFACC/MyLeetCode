/*
 * @lc app=leetcode.cn id=726 lang=typescript
 *
 * [726] 原子的数量
 */

//自己--看到括号先想到栈
//先处理formula，[字符，字符的数字]
//遇到），栈往前遍历，直到遇到（
//路上的各项乘）的倍数

// @lc code=start
function countOfAtoms(formula: string): string {
  const stack = []
  const temp = cut(formula)
  for (const [str, num] of temp) {
    if (str === ')') {
      let Len = stack.length
      while (Len-- >= 0) {
        const pre = stack[Len] as [string, number]
        if (pre[0] === '(') break
        pre[1] *= num
      }
      stack.splice(Len, 1)
    } else {
      stack.push([str, num])
    }
  }

  const map = new Map()
  for (const [str, num] of stack) {
    map.set(str, map.has(str) ? map.get(str) + num : num)
  }

  const keys: string[] = [...map.keys()]
  keys.sort()
  let res = ''
  for (const key of keys) {
    res += key + (map.get(key) > 1 ? map.get(key) : '')
  }

  return res
};

function cut(formula: string): [string, number][] {
  const list: [string, number][] = []
  for (let i = 0; i < formula.length; i++) {
    if (formula[i] === '(') {
      list.push([formula[i], 1])
    }
    else {
      let curr = formula[i]
      if (curr.charCodeAt(0) >= 65 && curr.charCodeAt(0) <= 90) {
        if (i + 1 < formula.length && formula[i + 1].charCodeAt(0) >= 97 && formula[i + 1].charCodeAt(0) <= 122) {
          curr += formula[++i]
        }
      }
      let num = ''
      while (i + 1 < formula.length && Number.isInteger(+formula[i + 1])) {
        num += formula[++i]
      }
      list.push([curr, num.length > 0 ? +num : 1])

    }
  }
  return list
}


// @lc code=end

countOfAtoms("H2O")

countOfAtoms("Mg(OH)2")

countOfAtoms("K4(ON(SO3)2)2")