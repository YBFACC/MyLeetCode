//自己--没有加限制条件

function orchestraLayout(num: number, xPos: number, yPos: number): number {

  //吐了，东方的神秘代码
  while (num > 18000 && xPos > 9000 && yPos > 9000 && xPos + 9000 < num && yPos + 9000 < num) {
    num -= 18000;
    xPos -= 9000;
    yPos -= 9000;
  }

  let start = 1
  while (true) {
    if (xPos === 0) {
      let sum = (start + (yPos % 9)) % 9
      return sum === 0 ? 9 : sum
    } else if (xPos + 1 === num) {
      let sum = (start + num * 2 - 3 + num - yPos) % 9
      return sum === 0 ? 9 : sum
    } else if (yPos === 0) {
      let sum = (start + num * 3 - 4 + num - xPos) % 9
      return sum === 0 ? 9 : sum
    } else if (yPos + 1 === num) {
      let sum = (start + num + xPos - 1) % 9
      return sum === 0 ? 9 : sum
    } else {
      start = (start + num * 4 - 4) % 9
      num -= 2
      xPos -= 1
      yPos -= 1
    }
  }
  return Infinity
};

console.log(orchestraLayout(
  201433680,
  71126836,
  176701102
))


console.log(orchestraLayout(6, 1, 4))
//7
console.log(orchestraLayout(5, 2, 2))
//2
console.log(orchestraLayout(5, 2, 3))
//9
console.log(orchestraLayout(5, 1, 2))
//6
console.log(orchestraLayout(5, 2, 1))
//4
console.log(orchestraLayout(5, 3, 2))

//9
console.log(orchestraLayout(3, 1, 1))
//3
console.log(orchestraLayout(3, 0, 2))
//6
console.log(orchestraLayout(4, 2, 2))