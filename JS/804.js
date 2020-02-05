/**
 * 自己---简单--性能一般
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  var obj = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
  }
  var set = new Set()
  for (let i = 0; i < words.length; i++) {
    let temp = ''
    let word = words[i]
    for (let j = 0; j < word.length; j++) {
      temp += obj[word[j]]
    }
    set.add(temp)
  }
  return set.size
}
console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']))
