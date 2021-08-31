//自己--差分

function corpFlightBookings(bookings: number[][], n: number): number[] {
  const diff = Array.from({ length: n + 1 }, () => 0)
  const res = []
  for (const [first, last, seat] of bookings) {
    diff[first] += seat
    diff[last+1] -= seat
  }
  let count = 0
  for (let i = 1; i <= n; i++) {
    count += diff[i]
    res[i - 1] = count
  }
  return res
};

corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)