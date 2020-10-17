function distributeCandies(candies: number[]): number {
  const set = new Set(candies)
  const half = candies.length >> 1
  return Math.min(half, set.size)
};