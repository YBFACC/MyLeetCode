
//参考--atMost-集合差-离散问题
function subarraysWithKDistinct(A: number[], K: number): number {
  return atMost(A, K) - atMost(A, K - 1)
};

function atMost(A: number[], K: number): number {
  let res = 0,
    cnt = 0,
    left = 0
  const Len = A.length
  const map = new Int32Array(Len + 1)
  for (let i = 0; i < Len; i++) {
    if (map[A[i]]++ == 0) cnt++
    while (cnt > K) {
      if (--map[A[left++]] == 0) {
        cnt--
      }
    }
    res += i - left + 1
  }
  return res
}

//10
console.log(subarraysWithKDistinct([2, 1, 2, 1, 2], 2))

//3
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3))
//7
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))


//8
console.log(subarraysWithKDistinct([2, 1, 1, 1, 2], 1))

//2
console.log(subarraysWithKDistinct([1, 2], 1))
