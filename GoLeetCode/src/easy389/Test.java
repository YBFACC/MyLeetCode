package easy389;

public class Test {
    public char findTheDifference(String s, String t) {
        String aa=s+t;
        int temp = 0;
        for (int i=0;i<aa.length();i++){
            temp^=aa.charAt(i);
        }
        return (char)temp;
    }
}
