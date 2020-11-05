class NestedInteger {
  //If value is provided, then it holds a single integer
  //Otherwise it holds an empty nested list
  constructor(value?: number) {

  };

  //Return true if this NestedInteger holds a single integer, rather than a nested list.
  isInteger(): boolean {

  };

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  getInteger(): number | null {

  };

  // Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number) {

  };

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  add(elem: NestedInteger) {

  };

  // Return the nested list that this NestedInteger holds,
  // or an empty list if this NestedInteger holds a single integer
  getList(): NestedInteger[] {

  };
};

//自己--递归--记录每层的值*depth
//如果根层没有数字--则当层不是根--往下层找

function depthSumInverse(nestedList: NestedInteger[]): number {
  const all_floor: number[] = [0]
  const dfs = function (nestedList: NestedInteger[], depth: number): void {
    if (all_floor[depth] === undefined) {
      all_floor[depth] = 0
    }
    for (const item of nestedList) {
      if (item.isInteger()) {
        all_floor[depth] += item.getInteger() as number
      } else {
        dfs(item.getList(), depth + 1)
      }
    }
  }
  dfs(nestedList, 1)
  while (all_floor[0] === 0) {
    all_floor.shift()
  }

  let count = 0
  for (let i = 0; i < all_floor.length; i++) {
    count += all_floor[i] * (all_floor.length - i)
  }

  return count
};