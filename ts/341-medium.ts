class NestedInteger {
  constructor(value?: number) {

  };

  isInteger(): boolean {

  };

  getInteger(): number | null {

  };

  setInteger(value: number) {

  };

  add(elem: NestedInteger) {

  };

  getList(): NestedInteger[] {

  };
};

//ts版本解法
//熟悉了iterator的ts中的使用

class NestedIterator {
  iterator: Iterator<number> | IterableIterator<number>
  nextValue: IteratorResult<number>
  constructor(nestedList: NestedInteger[]) {
    const generator = function* (List: NestedInteger[]): Iterator<number> | IterableIterator<number> {
      for (const item of List) {
        if (item.isInteger()) {
          yield item.getInteger()
        } else {
          yield* generator(item.getList())
        }
      }
    }
    this.iterator = generator(nestedList)
    this.nextValue = this.iterator.next()
  }

  hasNext(): boolean {
    return !this.nextValue.done
  }

  next(): number {
    const value = this.nextValue.value
    this.nextValue = this.iterator.next()
    return value
  }
}
