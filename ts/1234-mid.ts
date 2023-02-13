const idx = (c: string): number => {
  return c.charCodeAt(0) - "A".charCodeAt(0);
};

const check = (cnt: number[], partial: number): boolean => {
  if (cnt[idx("Q")] > partial || cnt[idx("W")] > partial || cnt[idx("E")] > partial || cnt[idx("R")] > partial) {
    return false;
  }
  return true;
};


/**
 * copy-滑动窗口
 * 想好思路，滑动窗口没捋顺
 * @param {*} s
 * @returns
 */
function balancedString(s: string): number {
  const cnt: number[] = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    cnt[idx(c)]++;
  }

  const partial = s.length / 4;
  let res = s.length;

  if (check(cnt, partial)) {
    return 0;
  }
  for (let l = 0, r = 0; l < s.length; l++) {
    while (r < s.length && !check(cnt, partial)) {
      cnt[idx(s[r])]--;
      r++
    }
    if (check(cnt, partial)) {
      res = Math.min(res, r - l)
    }

    cnt[idx(s[l])]++
  }

  return res;
};



balancedString("QQWQRRWRRQWWEWRQEREWQQWQREWRWQRQRWRQEQWE")