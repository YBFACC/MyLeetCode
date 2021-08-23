//自己-模拟

function getMaximumGenerated(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1
  const list = []
  list[0] = 0
  list[1] = 1
  for (let i = 1; i * 2 <= n; i++) {
    const index = i * 2
    list[index] = list[i]
    if (i * 2 + 1 <= n) { list[index + 1] = list[i] + list[i + 1] }
  }

  return Math.max(...list)
};

getMaximumGenerated(3)