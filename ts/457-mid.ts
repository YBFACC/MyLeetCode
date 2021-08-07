//自己--图
//从802的颜色标记法中得到灵感
//在原有数组上进行修改
//循环正负来表示当前循环所有值的正负

function circularArrayLoop(nums: number[]): boolean {
  const Len = nums.length
  let res = false
  const dfs = function (start: number, curr: number, positive: boolean, depth: number, loop: number) {
    //已经访问过
    if (nums[curr] > 5000 || nums[curr] < -5000) {
      //是不是同一次循环
      if (nums[curr] !== loop) return
    }
    //保证正负
    if ((nums[curr] > 0) !== positive) return

    const next = (curr + nums[curr] + Len) % Len
    //DFS访问到同一个循环里的节点就算true，不用严格首尾相接
    if (start === curr || nums[curr] === loop) {
      if (depth > 1) res = true
      return
    }
    if (nums[curr] > 5000 || nums[curr] < -5000) return

    nums[curr] = loop

    dfs(start, next, positive, depth + 1, loop)
  }

  //数组中不能有数组长度的整倍数
  for (let i = 0; i < Len; i++) {
    if (nums[i] % Len == 0) nums[i] = 10000000
  }

  for (let i = 0; i < Len; i++) {
    if (nums[i] > 5000 || nums[i] < -5000) continue
    const temp = nums[i], positive = temp > 0,
      loop = positive ? i + 1 + 5000 : -(i + 1 + 5000)

    dfs(i, (i + temp + Len * 5000) % Len, positive, 1, loop)
    nums[i] = loop
  }

  return res
};

circularArrayLoop([-8, -1, 1, 7, 2])//f

circularArrayLoop([-2, -3, -9])//F
circularArrayLoop([-1, -2, -3, -4, -5])//F

circularArrayLoop([1, 1, 2])//T

circularArrayLoop([-1, 2])//F


circularArrayLoop([1, 2, 2])//T

circularArrayLoop([-2, 1, -1, -2, -2])//F

circularArrayLoop([2, -1, 1, 2, 2])//T
circularArrayLoop([3, 1, 2])//T

