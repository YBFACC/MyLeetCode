//自己--重做--概率
//概率均分
function rand10(): number {
  let five = 4
  //1～3是0 5～7是5
  while (five === 4) {
    five = rand7()
  }
  let temp = 6
  while (temp >= 6) {
    temp = rand7()
  }
  return (five < 4 ? 0 : 5) + temp
};