import static java.lang.System.exit;

public class test {
    public static void aaa(int i){
        if(i>3) exit();
        System.out.println(i);
        aaa(++i);
        System.out.println(i);
    }
}
