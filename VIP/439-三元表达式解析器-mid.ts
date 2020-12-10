//参考--栈-从右向左--逐步解开3元式

function parseTernary(expression: string): string {
  if (expression.length === 1) {
    return expression
  }
  const stack = []
  const Len = expression.length
  for (let i = Len - 1; i >= 0; i--) {
    if (expression[i] !== '?') { stack.push(expression[i]) }
    else {
      exp(expression, stack, i)
      i--
    }
  }
  return stack[0]
}

function exp(expression: string, stack: string[], index: number) {
  let expStr = ''
  expStr += stack.pop()
  expStr += stack.pop()
  expStr += stack.pop()
  expStr = expression[index - 1] + expression[index] + expStr
  if (expStr[0] === 'T') {
    stack.push(expStr[2])
  } else {
    stack.push(expStr[4])
  }
}
parseTernary('T?T?F:5:3')
