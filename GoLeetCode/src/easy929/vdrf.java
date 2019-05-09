package easy929;
import java.util.HashSet;
import java.util.Set;

public class vdrf {



    public int numUniqueEmails(String[] emails) {
        Set<String> setemails = new HashSet<>();
        for (int i = 0; i < emails.length; i++) {
            String[] str = emails[i].split("@");
            StringBuilder SB = new StringBuilder("");
            for (int j = 0; j < str[0].length(); j++) {
                if (str[0].charAt(j) == '.') {
                    continue;
                }
                if (str[0].charAt(j) == '+') {
                    break;
                }
                SB.append(str[0].charAt(j));
            }
            setemails.add(SB.append("@").append(str[1]).toString());
        }
        return setemails.size();
    }



}
