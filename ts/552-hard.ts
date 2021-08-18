//自己--状态机dp
//0->有A、最后1个是A
//1->没A，最后1个是1个L
//2->没A，最后2个是2个L
//3->没A，最后是P
//4->有A，最后1个是1个L
//5->有A，最后最后2个是2个L
//6->有A，最后是P
//1,2,3->0
//3->1
//1->2
//1,2,3->3
//0,6->4
//4->5
//0,4,5,6->6

function checkRecord(n: number): number {
  let list = Array.from({ length: 7 }, () => 0)
  list[0] = 1
  list[1] = 1
  list[3] = 1
  while (n-- > 1) {
    const temp = []
    temp[0] = (list[1] + list[2] + list[3]) % 1000000007
    temp[1] = list[3] % 1000000007
    temp[2] = list[1] % 1000000007
    temp[3] = (list[1] + list[2] + list[3]) % 1000000007
    temp[4] = (list[0] + list[6]) % 1000000007
    temp[5] = list[4] % 1000000007
    temp[6] = (list[0] + list[4] + list[5] + list[6]) % 1000000007
    list = temp
  }
  return list.reduce((pre, curr) => pre + curr, 0) % 1000000007
};
console.log(checkRecord(10101))