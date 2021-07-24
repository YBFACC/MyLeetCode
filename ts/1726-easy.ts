//自己--写的复杂了

function maximumTime(time: string): string {
  let res = ''
  if (time[0] === '?') {
    if (time[1] === '?') {
      res += 23 + ':'
    } else if (time[1] < '4') {
      res += 2 + time[1] + ':'
    } else {
      res += 1 + time[1] + ':'
    }
  } else {
    res += time[0]
  }
  if (res.length < 2) {
    if (time[1] === '?') {
      if (time[0] === '2') {
        res += '3'+ ':'
      } else {
        res += '9'+ ':'
      }
    } else {
      res += time[1] + ':'
    }
  }
  if (time[3] === '?') {
    res += '5'
  } else {
    res += time[3]
  }

  if (time[4] === '?') {
    res += '9'
  } else {
    res += time[4]
  }
  return res
};

maximumTime("?3:1?")