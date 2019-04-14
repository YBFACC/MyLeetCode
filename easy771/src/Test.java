import java.util.Collection;
import java.util.HashSet;

public class Test {
    public int numJewelsInStones(String J, String S) {
        int count = 0;
        Collection a = new HashSet();
        for (int i = 0; i < J.length(); i++) {
            a.add(J.charAt(i));
        }
        for (int i = 0; i < S.length(); i++) {

        }

        return count;
    }

}
