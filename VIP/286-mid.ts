
//自己--bfs

/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
  if (rooms.length === 0) return 
  let queue: number[][] = []
  const ways = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ]
  const row = rooms.length
  const col = rooms[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j])
      }
    }
  }
  let count = 1
  while (queue.length > 0) {
    let size = queue.length
    const temp: number[][] = []
    while (size > 0) {
      const floor = queue.pop() as number[]
      helper(temp, floor[0], floor[1])
      size--
    }
    queue = temp
    count++
  }

  function helper(temp: number[][], i: number, j: number): void {
    for (const way of ways) {
      const n_i = i + way[0]
      const n_j = j + way[1]
      if (n_i < 0 || n_j < 0 || n_i >= row || n_j >= col || rooms[n_i][n_j] !== 2147483647) {
        continue
      }
      rooms[n_i][n_j] = count
      temp.push([n_i, n_j])
    }
  }

  return
};

wallsAndGates([
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647]])