class BIT {
  Len: number
  tree: number[]
  constructor(Len: number) {
    this.Len = Len
    this.tree = Array.from({ length: Len + 1 }, () => 0)
  }
  lowbit(x: number) {
    return x & (-x)
  }
  query(x: number) {
    x++
    let presum = 0
    while (x > 0) {
      presum += this.tree[x]
      x -= this.lowbit(x)
    }
    return presum
  }

  add(x: number, val: number) {
    x++
    while (x <= this.Len) {
      this.tree[x] += val
      x += this.lowbit(x)
    }
  }
}

//参考--树状数组
//这里不需要对bulls[i]的值排序，按天遍历。
//因为在树状数组中，当前的bulls[i]的值大了，只会影响树状数组bulls[i]后面的值，对bulls[i]前面的值没有影响。

function kEmptySlots(bulbs: number[], k: number): number {
  const N = bulbs.length
  const bit = new BIT(N)

  const visited = new Set()

  for (let i = 0; i < N; i++) {
    const x = bulbs[i] - 1
    bit.add(x, 1)
    visited.add(x)
    let pre_x = x - (k + 1), nxt_x = x + (k + 1)
    if (pre_x >= 0 && visited.has(pre_x)) {
      if (bit.query(x - 1) - bit.query(pre_x) === 0) return i + 1
    }
    if (nxt_x < N && visited.has(nxt_x)) {
      if (bit.query(nxt_x - 1) - bit.query(x) === 0) return i + 1
    }

  }
  return -1
};

console.log(kEmptySlots([1, 2, 3], 1))
console.log(kEmptySlots([1, 3, 2], 1))