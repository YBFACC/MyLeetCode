/**
 * 自己－－模拟栈
 * @param pushed 
 * @param popped 
 * @returns 
 */

function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let pushIndex = 0, popIndex = 0
  const Len = pushed.length, popTemp: number[] = []

  while (pushIndex < Len) {
    popTemp.push(pushed[pushIndex]);

    //模拟栈推出
    while (popTemp.length > 0) {
      if (popTemp[popTemp.length - 1] === popped[popIndex]) {
        popTemp.pop()
      } else {
        break
      }
      popIndex++
    }
    pushIndex++
  }
  if (popTemp.length !== 0 || pushIndex !== popIndex || pushIndex !== Len)
    return false

  return true
};

validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])