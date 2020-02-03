/**
 * 自己---秒杀--性能一般
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var ran = ransomNote.split('')
  var mag = magazine.split('')
  ran = ran.filter(v => {
    let index = mag.indexOf(v)
    return index !== -1 ? (mag[index] = '#') : false
  })
  return ran.length === ransomNote.length
}
