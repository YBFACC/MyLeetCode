package easy771;

public class teat0415 {


    public int numJewelsInStones(String J, String S) {
        int count = 0;
        for (int i = 0; i < S.length(); i++) {
            for (int j = 0; j < J.length(); j++) {
                if (S.charAt(i) == J.charAt(j)) {
                    count++;
                    continue;
                }
            }
        }

        return count;
    }
    public static void main(String[] args){
        teat0415 a1=new teat0415();
        a1.numJewelsInStones("aA","aAAbbbb");
    }


}
