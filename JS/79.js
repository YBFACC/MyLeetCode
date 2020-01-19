/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var IsFind = false
  var MaxIndex=board.length
  var MaxNums=board[0].length
  var WordFirst=word[0]
  var func = function(index, nums, WordIndex) {
    if (WordIndex == word.length) {
      IsFind = true
      return
    }
    if (
      index < 0 ||
      nums < 0 ||
      index >= MaxIndex ||
      nums >= MaxNums ||
      board[index][nums] != word[WordIndex]
    ) {
      return
    }
    if (!IsFind) {
      let temp = board[index][nums]
      board[index][nums] = '.'
      func(index, nums + 1, WordIndex + 1)
      func(index, nums - 1, WordIndex + 1)
      func(index + 1, nums, WordIndex + 1)
      func(index - 1, nums, WordIndex + 1)
      board[index][nums] = temp
    } else {
      return
    }
  }

  for (let index = 0; index < MaxIndex; index++) {
    for (let nums = 0; nums < MaxNums; nums++) {
      if (board[index][nums]==WordFirst) {
        func(index, nums, 0)
      }
    }
  }

  return IsFind
}
exist(
  [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D']
  ],
  'AAB'
)
