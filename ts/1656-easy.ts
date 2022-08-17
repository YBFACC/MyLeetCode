interface obj {
  [index: number]: string
}


class OrderedStream {
  limit: number
  instance: obj
  ptr: number = 1
  constructor(n: number) {
    this.limit = n
    this.instance = {}
  }

  insert(idKey: number, value: string): string[] {
    const res: string[] = []
    const instance = this.instance
    instance[idKey] = value

    while (instance[this.ptr]) {
      res.push(instance[this.ptr])
      this.ptr++
    }
    return res
  }
}

const temp = new OrderedStream(5)
temp.insert(3, "ccccc"); // 插入 (3, "ccccc")，返回 []
temp.insert(1, "aaaaa"); // 插入 (1, "aaaaa")，返回 ["aaaaa"]
temp.insert(2, "bbbbb"); // 插入 (2, "bbbbb")，返回 ["bbbbb", "ccccc"]
temp.insert(5, "eeeee"); // 插入 (5, "eeeee")，返回 []
temp.insert(4, "ddddd"); // 插入 (4, "ddddd")，返回 ["ddddd", "eeeee"]
