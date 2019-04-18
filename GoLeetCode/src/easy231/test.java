package easy231;

public class test {

    public boolean isPowerOfTwo(int n) {
        /*if (n <= 0) return false;
        for (int i = 0; i < 31; i++) {
            if (n == 1) return true;
            if (n >=2) {
                if (n % 2 != 0) return false;
                n = n / 2;
                continue;
            }

        }
        return false;*/
///////////////////////////////////////////////////


        if(n<=0) return false; if((n&n-1)==0) return true; return false;


    }


}
