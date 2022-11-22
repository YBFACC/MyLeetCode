
// const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))

// function nthMagicalNumber(n: number, a: number, b: number): number {
//   let left = Math.min(a, b), right = Math.min(a, b) * n
//   let lcm = Math.trunc(a * b / gcd(a, b))
//   while (left + 1 < right) {
//     const mid = left + ((right - left) >> 1)
//     if (Math.trunc(mid / a) + Math.trunc(mid / b) - Math.trunc(mid / lcm) >= n) {
//       right = mid
//     } else {
//       left = mid
//     }
//   }
//   return right % 1000000007
// };



/**
 * copy--最小公倍数，ｇｃｄ
 */

const MOD = 1000000007;
var nthMagicalNumber = function (n: number, a: number, b: number): number {
  let l = Math.min(a, b);
  let r = n * Math.min(a, b);
  const c = lcm(a, b);
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c);
    if (cnt >= n) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return (r + 1) % MOD;
}

const lcm = (a: number, b: number): number => {
  return Math.floor(a * b / gcd(a, b));
}

const gcd = (a: number, b: number): number => {
  return b !== 0 ? gcd(b, a % b) : a;
};


nthMagicalNumber(1000000000, 40000, 40000)