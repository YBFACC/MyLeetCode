public class a1 {


    public boolean confusingNumber(int N) {
        String a = "" + N;
        int t1 = 0, f1 = 0;
        int t2 = 0, f2 =0;
        for (int i = 0; i < a.length(); i++) {
            if (a.charAt(i) == '2' || a.charAt(i) == '3' ||a.charAt(i) == '4' || a.charAt(i) == '5' || a.charAt(i) == '7') {
                f1 = -1;
                break;
            } else {
                f1 = 1;
            }


        }
        for (int i = 0; i < a.length(); i++) {
            if (a.charAt(i) == '6' || a.charAt(i) == '9') {
                t1 = 1;
                break;
            }
        }
        if (t1 == 1 && f1 == 1) {
            return true;
        } else {
            return false;
        }
    }


    public static void main(String[] args) {
        int N = 916;
        a1 a11 = new a1();
        System.out.println(a11.confusingNumber(N));
    }


}
