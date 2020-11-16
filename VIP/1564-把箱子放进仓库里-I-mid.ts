//自己--贪心--降序排列
//对第i项进行判断，前提是0-i的最低限制
//满足就可以box就可以推入房子

function maxBoxesInWarehouse(boxes: number[], warehouse: number[]): number {
  boxes.sort((a, b) => b - a)
  const Len = warehouse.length
  const min = Array.from({ length: Len }, () => Infinity)
  min[0] = warehouse[0]
  for (let i = 1; i < Len; i++) {
    min[i] = Math.min(warehouse[i], min[i - 1])
  }
  const all = boxes.length
  for (let i = Len - 1; i >= 0; i--) {
    if (boxes.length > 0 &&
      boxes[boxes.length - 1] <= min[i]) {
      boxes.pop()
    }
  }
  return all - boxes.length
};
//1
console.log(maxBoxesInWarehouse([1, 2, 3], [1, 2, 3, 4]))

//3
console.log(maxBoxesInWarehouse([4, 3, 4, 1], [5, 3, 3, 4, 1]))