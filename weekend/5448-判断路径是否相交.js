/**
 * 周赛--set查重
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let set = new Set()
  set.add('0,0')
  let curr = [0, 0]
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'N') {
      curr[1]++
    }
    if (path[i] === 'S') {
      curr[1]--
    }
    if (path[i] === 'E') {
      curr[0]--
    }
    if (path[i] === 'W') {
      curr[0]++
    }
    let str = `${curr[0]},${curr[1]}`
    if (set.has(str)) {
      return true
    }
    set.add(str)
  }
  return false
}

console.log(isPathCrossing('NES'))
