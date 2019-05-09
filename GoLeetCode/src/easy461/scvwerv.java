package easy461;

public class scvwerv {
    public int hammingDistance(int x, int y) {
        int p = x ^ y;
        int res=0;
        while(p>0){
            res+=p&1;
            p>>=1;
        }
        return res;
    }
}
