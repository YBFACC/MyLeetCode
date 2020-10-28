/*
 * @lc app=leetcode.cn id=1044 lang=typescript
 *
 * [1044] 最长重复子串
 */

// @lc code=start
//参考官方题解--二分+滚动哈希
//二分来试探最长的重复字串
//滚动哈希来记录是否有重复值
function longestDupSubstring(S: string): string {
  const Len = S.length
  //根据生日悖论--参与哈希的数据量应该小于平方根
  const Mod = 2 ** 32
  const list: number[] = []
  //将数据处理为0-26
  for (let i = 0; i < Len; i++) {
    list[i] = S[i].charCodeAt(0) - 97
  }
  //二分逼近最长长度
  let left = 1
  let right = Len
  while (left !== right) {
    const mid = (left + right) >> 1
    if (search(mid) !== -1) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  function search(dis: number,): number {
    //记录哈希值
    const set = new Set()
    let hash = 0
    //初始化0->dis-1的哈希值
    for (let i = 0; i < dis; i++) {
      hash = (hash * 26 + list[i]) % Mod
    }
    set.add(hash)
    let aL = 1
    //准备的掩码--用于得到(i-1)*al的值--方便计算每一步的hash值
    for (let i = 1; i <= dis; i++) {
      aL = (aL * 26) % Mod
    }
    for (let i = 1; i < Len - dis + 1; i++) {
      hash = (hash * 26 - list[i - 1] * aL + list[i + dis - 1]) % Mod
      if (set.has(hash)) return i
      set.add(hash)
    }

    return -1
  }
  let start = search(left - 1)
  return start !== -1 ? S.slice(start, start + left - 1) : ''
};

// @lc code=end
//"akyj"
console.log(longestDupSubstring("moplvidmaagmsiyyrkchbyhivlqwqsjcgtumqscmxrxrvwsnjjvygrelcbjgbpounhuyealllginkitfaiviraqcycjmskrozcdqylbuejrgfnquercvghppljmojfvylcxakyjxnampmakyjbqgwbyokaybcuklkaqzawageypfqhhasetugatdaxpvtevrigynxbqodiyioapgxqkndujeranxgebnpgsukybyowbxhgpkwjfdywfkpufcxzzqiuglkakibbkobonunnzwbjktykebfcbobxdflnyzngheatpcvnhdwkkhnlwnjdnrmjaevqopvinnzgacjkbhvsdsvuuwwhwesgtdzuctshytyfugdqswvxisyxcxoihfgzxnidnfadphwumtgdfmhjkaryjxvfquucltmuoosamjwqqzeleaiplwcbbxjxxvgsnonoivbnmiwbnijkzgoenohqncjqnckxbhpvreasdyvffrolobxzrmrbvwkpdbfvbwwyibydhndmpvqyfmqjwosclwxhgxmwjiksjvsnwupraojuatksjfqkvvfroqxsraskbdbgtppjrnzpfzabmcczlwynwomebvrihxugvjmtrkzdwuafozjcfqacenabmmxzcueyqwvbtslhjeiopgbrbvfbnpmvlnyexopoahgmwplwxnxqzhucdieyvbgtkfmdeocamzenecqlbhqmdfrvpsqyxvkkyfrbyolzvcpcbkdprttijkzcrgciidavsmrczbollxbkytqjwbiupvsorvkorfriajdtsowenhpmdtvamkoqacwwlkqfdzorjtepwlemunyrghwlvjgaxbzawmikfhtaniwviqiaeinbsqidetfsdbgsydkxgwoqyztaqmyeefaihmgrbxzyheoegawthcsyyrpyvnhysynoaikwtvmwathsomddhltxpeuxettpbeftmmyrqclnzwljlpxazrzzdosemwmthcvgwtxtinffopqxbufjwsvhqamxpydcnpekqhsovvqugqhbgweaiheeicmkdtxltkalexbeftuxvwnxmqqjeyourvbdfikqnzdipmmmiltjapovlhkpunxljeutwhenrxyfeufmzipqvergdkwptkilwzdxlydxbjoxjzxwcfmznfqgoaemrrxuwpfkftwejubxkgjlizljoynvidqwxnvhngqakmmehtvykbjwrrrjvwnrteeoxmtygiiygynedvfzwkvmffghuduspyyrnftyvsvjstfohwwyxhmlfmwguxxzgwdzwlnnltpjvnzswhmbzgdwzhvbgkiddhirgljbflgvyksxgnsvztcywpvutqryzdeerlildbzmtsgnebvsjetdnfgikrbsktbrdamfccvcptfaaklmcaqmglneebpdxkvcwwpndrjqnpqgbgihsfeotgggkdbvcdwfjanvafvxsvvhzyncwlmqqsmledzfnxxfyvcmhtjreykqlrfiqlsqzraqgtmocijejneeezqxbtomkwugapwesrinfiaxwxradnuvbyssqkznwwpsbgatlsxfhpcidfgzrc"))

console.log(longestDupSubstring("banana"))