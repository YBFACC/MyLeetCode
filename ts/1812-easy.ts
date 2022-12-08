
/**
 * 自己
 */
interface obj {
  [index: string]: number
}

function squareIsWhite(coordinates: string): boolean {
  const chartMap: obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  }
  const a = coordinates[0], b = coordinates[1]
  const A = chartMap[a], B = +b
  const AOdd = A % 2 === 0, BOdd = B % 2 === 0
  return AOdd !== BOdd
};

squareIsWhite("a1")