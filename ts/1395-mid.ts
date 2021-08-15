//参考--离散化+树状数组
//i<j<k
//先对rating进行排序，第i项哪些比自己大、哪些比自己小
//因为排序失去的先后关系，通过在getid二分的方式重新确定
//根据大小关系，逐个插入到树状数组（快速得到0～i的总数）

function numTeams(rating: number[]): number {
  const Len = rating.length, maxN = Len + 2
  let c = Array.from({ length: maxN }, () => 0)
  const disc = [-1, ...rating]
  disc.sort((a, b) => a - b)
  const iLess = Array.from({ length: Len }, () => 0)
    , iMore = Array.from({ length: Len }, () => 0)
    , kLess = Array.from({ length: Len }, () => 0)
    , kMore = Array.from({ length: Len }, () => 0)

  //在左侧
  for (let i = 0; i < Len; i++) {
    const id = getId(rating[i], disc)
    //评分低的数
    iLess[i] = get(id, c)
    //评分高的数
    iMore[i] = get(Len + 1, c) - get(id, c)
    //更新树状数组
    add(id, 1, c, maxN)
  }

  c = Array.from({ length: maxN }, () => 0)
  for (let i = Len - 1; i >= 0; --i) {
    const id = getId(rating[i], disc);
    kLess[i] = get(id, c);
    kMore[i] = get(Len + 1, c) - get(id, c);
    add(id, 1, c, maxN);
  }

  let res = 0
  for (let i = 0; i < Len; ++i) {
    res += iLess[i] * kMore[i] + iMore[i] * kLess[i];
  }

  return res
};

numTeams([2, 7, 3, 4, 1])



function add(p: number, v: number, c: number[], maxN: number) {
  while (p < maxN) {
    c[p] += v
    p += lowbit(p)
  }
}

function lowbit(n: number) {
  return n & (-n)
}

function getId(target: number, disc: number[]) {
  let left = 0, right = disc.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (disc[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

function get(p: number, c: number[]) {
  let r = 0
  while (p > 0) {
    r += c[p]
    p -= lowbit(p)
  }
  return r
}

