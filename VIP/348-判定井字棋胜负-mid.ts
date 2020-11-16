//copy--N^2

class TicTacToe {
  m: number[][]
  n: number
  constructor(n: number) {
    this.n = n
    this.m = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => 0))
  }
  move(row: number, col: number, player: number): number {
    this.m[row][col] = player
    return (this.m[row].every(v => v === player) ||
      this.m.every(v => v[col] === player) ||
      (row === col && this.m.every((v, i) => v[i] === player)) ||
      (row + col === this.m.length - 1 &&
        this.m.every((v, i, a) => a[i][a.length - 1 - i] === player))) ? player : 0
  }
}
