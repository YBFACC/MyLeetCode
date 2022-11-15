
/**
 * 贪心
 * @param boxTypes 
 * @param truckSize 
 * @returns 
 */
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => {
    return a[1] - b[1]
  })
  let res = 0
  while (truckSize > 0 && boxTypes.length > 0) {
    const boxType = boxTypes.pop() as number[]
    const min = Math.min(truckSize, boxType[0])
    res += min * boxType[1]
    truckSize -= boxType[0]
  }
  return res
};

maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10)
maximumUnits([[1, 3], [2, 2], [3, 1]], 4)