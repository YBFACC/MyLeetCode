package mid877;

public class acwe {

    public boolean stoneGame(int[] piles) {
        //dp其实就是存储了递归过程中的数值
        //dps[i][j]代表从i到j所能获得的最大的绝对分数
        //（比如为1就说明亚历克斯从i到j可以赢李1分）
        //如何计算dps[i][j]呢:max(piles[i]-dp[i+1][j],piles[j]-dp[i][j-1]);
        //这里减去dps数组是因为李也要找到最大的
        //最后dps=[5 2 4 1]
        //        [0 3 1 4]
        //        [0 0 4 1]
        //        [0 0 0 5]
        int n = piles.length;
        int[][] dps = new int[n][n];
        //dps[i][i]存储当前i的石子数
        for (int i = 0; i < n; i++)
            dps[i][i] = piles[i];
        //d=1,其实代表，先算两个子的时候
        for (int d = 1; d < n; d++) {
            //有多少组要比较
            for (int j = 0; j < n - d; j++) {
                //比较j到d+j
                dps[j][d + j] = Math.max(piles[j] - dps[j + 1][d + j], piles[d + j] - dps[j][d + j - 1]);
            }
        }
        return dps[0][n - 1] > 0;
    }

    public static void main(String[] args) {
        int a[]={5,3,4,5};
        acwe test=new acwe();
        test.stoneGame(a);
    }
}
