package easy1021;

public class fesca {
    public String removeOuterParentheses(String S) {
        if(S == null || S == "" || S.length() >10000){
            return "";
        }
        StringBuilder sb = new StringBuilder();
        char[] c = S.toCharArray();
        int temp = 0;
        int begin = 0;
        int end = 0;
        for(int i=0;i<c.length;i++){
            if(c[i] == '('){
                if(temp == 0){
                    begin = i;
                }
                temp += 1;
            }else if(c[i] == ')'){
                if(temp == 1){
                    end = i;
                }
                temp -= 1;
            }

            if(temp == 0 && begin < end){
                sb.append(S.substring(begin+1,end));
            }
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        String a="(()())(())(()(()))";
        fesca aa=new fesca();
        aa.removeOuterParentheses(a);
    }
}
