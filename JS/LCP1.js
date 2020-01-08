var game = function(guess, answer) {
  var curr = 0
  for (let index = 0; index < 3; index++) {
    const an = answer[index]
    const gu =guess[index]
    if(an==gu){
      curr++
    }
  }
  return curr
}
