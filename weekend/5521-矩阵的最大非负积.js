//自己--DFS--记录每个x-y的[max,min]值
function maxProductPath(grid) {
	const xMax = grid.length
	const yMax = grid[0].length
	let res = -1
	const map = new Map()
	//[max,min]
	const dfs = function (x, y, temp) {
		if (x < 0 || y < 0 || x >= xMax || y >= yMax) return
		const path = `${x},${y}`
		const floor = temp * grid[x][y]
		if (map.has(path)) {
			const _max = map.get(path)[0]
			const _min = map.get(path)[1]
			if (floor <= _max && floor >= _min) return
			else {
				const list = map.get(path)
				list[0] = Math.max(list[0], floor)
				list[1] = Math.min(list[1], floor)
			}
		} else {
			map.set(path, [floor, floor])
		}
		if (x === xMax - 1 && y === yMax - 1) {
			res = Math.max(res, floor)
			return [floor, floor]
		}
		dfs(x + 1, y, floor)
		dfs(x, y + 1, floor)
	}
	dfs(0, 0, 1)
	return res % 1000000007
}
//768
maxProductPath([
	[-1, -4, 2],
	[4, 3, -1],
	[2, -4, 4],
	[1, -1, -4]
])

maxProductPath([
	[2, 4, -3, 0, 3],
	[-1, 0, 3, -2, 4],
	[-3, -3, 1, 2, -4],
	[3, 4, 0, 0, 1]
])

maxProductPath([
	[-1, -3],
	[3, 4],
	[0, 4],
	[-4, 4]
])

maxProductPath([
	[1, 4, 4, 0],
	[-2, 0, 0, 1],
	[1, -1, 1, 1]
])

maxProductPath([
	[1, 3],
	[0, -4]
])

maxProductPath([
	[1, -2, 1],
	[1, -2, 1],
	[3, -4, 1]
])

maxProductPath([
	[-1, -2, -3],
	[-2, -3, -3],
	[-3, -3, -2]
])
