//参考--异或
//a=a^b
//b=b^a^b
//a=b^a^b^a^b
function swapNumbers(numbers: number[]): number[] {
  numbers[0] ^= numbers[1]
  numbers[1] ^= numbers[0]
  numbers[0] ^= numbers[1]
  return numbers
};
swapNumbers([0, 10000])