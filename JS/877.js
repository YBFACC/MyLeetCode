//参考-同486题-二维dp
var stoneGame = function (piles) {
	const Len = piles.length
	const dp = Array.from({ length: piles.length }, () =>
		Array.from({ length: piles.length }, () => 0)
	)
	for (let i = 0; i < piles.length; i++) {
		dp[i][i] = piles[i]
	}
	for (let i = Len - 2; i > 0; i--) {
		for (let j = 0; j < piles.length; j++) {
			dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
		}
	}
	return dp[0][piles.length - 1] >= 0
}

console.log(
	stoneGame([
		7,
		7,
		12,
		16,
		41,
		48,
		41,
		48,
		11,
		9,
		34,
		2,
		44,
		30,
		27,
		12,
		11,
		39,
		31,
		8,
		23,
		11,
		47,
		25,
		15,
		23,
		4,
		17,
		11,
		50,
		16,
		50,
		38,
		34,
		48,
		27,
		16,
		24,
		22,
		48,
		50,
		10,
		26,
		27,
		9,
		43,
		13,
		42,
		46,
		24
	])
)
