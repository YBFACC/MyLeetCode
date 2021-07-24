//参考--树状数组

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
  private _query(x: number) {
    let ans = 0
    while (x > 0) {
      ans += this.tree[x]
      x -= this.lowbit(x)
    }
    return ans
  }
  query(x: number, y: number) {
    return this._query(y) - this._query(x - 1)
  }
  update(x: number) {
    while (x <= this.Len) {
      ++this.tree[x]
      x += this.lowbit(x)
    }
  }
}

function minInteger(num: string, k: number): string {
  let res = ''
  const queue: number[][] = Array.from({ length: 10 }, () => [])
  const Len = num.length
  for (let i = 0; i < Len; i++) {
    queue[+num[i]]!.push(i + 1)
  }
  const bit = new BIT(Len)

  for (let i = 1; i <= Len; i++) {
    for (let j = 0; j < 10; j++) {
      if (queue[j].length !== 0) {
        //统计有几个项，从i的后面提到了前面
        let behind = bit.query(queue[j][0] + 1, Len)
        //i项往前提的距离
        let dist = queue[j][0] + behind - i
        if (dist <= k) {
          bit.update(queue[j].shift() as number)
          res += j
          k -= dist
          break
        }
      }
    }
  }
  return res
};

minInteger("4321", 4)