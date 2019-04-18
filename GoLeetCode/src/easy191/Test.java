package easy191;

public class Test {

    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int temp = 0;
        while (n > 0) {
            if ((n & 1) == 1) {
                temp++;
            }
            n>>>=1;
        }
        return temp;
    }

    public static void main(String[] args) {
        Test a = new Test();
        a.hammingWeight(0b11111111111111111101);
    }
}
