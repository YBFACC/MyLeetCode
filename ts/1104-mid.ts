//参考--满二叉树特性

function pathInZigZagTree(label: number): number[] {
  let depth = Math.floor(Math.log2(label))
  let res = [label]

  while (depth > 0) {
    const father = label >> 1
    if (father < 1) break
    let temp = 2 ** depth - 1 - father + 2 ** (depth - 1)
    res.unshift(temp)
    label = temp
    depth--
  }

  return res
};

pathInZigZagTree(3)