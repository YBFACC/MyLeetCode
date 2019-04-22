package easy709;

public class acdscae {
    public String toLowerCase(String str) {
        String temp="";
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) < 90&&str.charAt(i)>64) {
                temp+=(char)(str.charAt(i)+32);
            }else {temp+=str.charAt(i);}
        }
        return temp;
    }

    public static void main(String[] args) {
        acdscae aa = new acdscae();
        aa.toLowerCase("Hello");

    }
}
