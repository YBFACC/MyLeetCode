//自己--判断完情况
function tictactoe(board: string[]): string {
  const n = board.length

  let count1 = 1
  for (let i = 1; i < n; i++) {
    if (board[i][i] === board[i - 1][i - 1] && board[i][i] !== ' ') count1++
    else count1 = 1
  }
  if (count1 === n) return board[0][0]

  let count2 = 1
  for (let i = 1; i < n; i++) {
    if (
      board[n - i][i - 1] === board[n - i - 1][i] &&
      board[n - i][i - 1] !== ' '
    )
      count2++
    else count2 = 1
  }
  if (count2 === n) return board[n - 1][0]

  //行
  for (let i = 0; i < n; i++) {
    let count = 1
    for (let j = 1; j < n; j++) {
      if (board[i][j] === board[i][j - 1] && board[i][j] !== ' ') count++
      else count = 1
    }
    if (count === n) return board[i][0]
  }
  //列
  for (let j = 0; j < n; j++) {
    let count = 1
    for (let i = 1; i < n; i++) {
      if (board[i][j] === board[i - 1][j] && board[i][j] !== ' ') count++
      else count = 1
    }
    if (count === n) return board[0][j]
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === ' ') return 'Pending'
    }
  }

  return 'Draw'
}
console.log(tictactoe(['OOX', 'XXO', 'OX ']))
