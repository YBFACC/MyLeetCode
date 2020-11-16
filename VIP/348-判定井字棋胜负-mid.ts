//参考--记录所有获胜条件

class TicTacToe {
  r: number[]
  c: number[]
  n: number
  ldias = 0
  rdias = 0
  constructor(n: number) {
    this.n = n
    this.r = Array.from({ length: n }, () => 0)
    this.c = Array.from({ length: n }, () => 0)
  }
  // move(row: number, col: number, player: number): number {
  //   this.m[row][col] = player
  //   return (this.m[row].every(v => v === player) ||
  //     this.m.every(v => v[col] === player) ||
  //     (row === col && this.m.every((v, i) => v[i] === player)) ||
  //     (row + col === this.m.length - 1 &&
  //       this.m.every((v, i, a) => a[i][a.length - 1 - i] === player))) ? player : 0
  // }
  move(row: number, col: number, player: number): number {
    let num = player === 2 ? -1 : player
    const target = num * this.n
    const r = this.r
    const c = this.c
    if ((r[row] += num) === target) return player
    if ((c[col] += num) === target) return player
    if (row === col) {
      if ((this.ldias += num) === target) return player
    }
    if (row + col === this.n - 1) {
      if ((this.rdias += num) === target) return player
    }
    return 0
  }
}
