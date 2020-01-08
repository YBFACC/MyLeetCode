

import java.io.*;


public class LR {

    public static String buffer = null;//存取从键盘输入的字符
    public static int p = 0;//字符当前的位置
    public static String ch;//存取当前字符
    public static boolean error = false;//判断表达式是否正确
    public static int m = 0;

    public boolean plusandminus()//判断是否为+或者-号
    {
        boolean flag = false;
        multiplyanddivide();//*号和/号的判断
        if (ch.equals("+") || ch.equals("-")) {
            flag = true;
        }
        if (flag) {
            p = p + 1;
            ch = buffer.substring(p, p + 1);
            //System.out.println("(plusandminus)ch:"+ch);
            outputspace(p + 1, m);
            plusandminus();
        }
        return flag;
    }

    public boolean multiplyanddivide()//*号和/号的判断
    {
        boolean flag = false;
        brackets();//字符和（）的判断
        if (ch.equals("*") || ch.equals("/")) {
            flag = true;
        }
        if (flag) {
            p = p + 1;
            ch = buffer.substring(p, p + 1);
            //System.out.println("(multiplyanddivide)ch:"+ch);
            outputspace(p + 1, m);
            multiplyanddivide();
        }
        return flag;
    }

    public boolean brackets()//字符和”（）“的判断
    {
        boolean flag = false;
        if (ch.compareTo("A") >= 0 && ch.compareTo("Z") <= 0) {
            flag = true;
        }
        if (ch.compareTo("a") >= 0 && ch.compareTo("z") <= 0) {
            flag = true;
        }
        if (flag)//是否为字符
        {
            p = p + 1;
            ch = buffer.substring(p, p + 1);
            //System.out.println("(isstring1)ch:"+ch);
            outputspace(p + 1, m);
            return flag;
        } else if (ch.equals("("))//是否为“（”符号
        {
            p = p + 1;
            ch = buffer.substring(p, p + 1);
            //System.out.println("(isstring2)ch:"+ch);
            outputspace(p + 1, m);
            plusandminus();//判断括号里的表达式是否正确
            if (ch.equals(")"))//是否有配对的“）”
            {
                p = p + 1;
                ch = buffer.substring(p, p + 1);
                //System.out.println("(isstring3)ch:"+ch);
                outputspace(p + 1, m);
            } else {
                error = true;
            }
        } else {
            error = true;
        }
        return flag;
    }

    public void outputspace(int n, int m)//输出空格
    {
        StringBuffer buf = new StringBuffer();
        for (int i = 0; i < n; i++) {
            buf.append(" ");
        }
        if (n < m) {
            System.out.print(buf.toString());
            System.out.println(buffer.substring(p + 1, m));
        }
    }

    public void mainoperation() throws IOException//读取输入字符，如果出错，抛出IO异常
    {
        p = 0;
        boolean flag = true;

        BufferedReader br = new BufferedReader(new FileReader(new File("./input.txt")));
        buffer = br.readLine();//读取一行字符
        System.out.println(buffer);
        m = buffer.length();
        while (flag) {
            ch = buffer.substring(p, p + 1);
            outputspace(p + 1, m);
            if (ch.equals("#") || error)//判断是否结束
            {
                flag = false;
                break;
            }
            plusandminus();//子程序判断表达式是否正确
        }
        if (error) {
            System.out.println("表达式错误！");
        } else {
            System.out.println("表达式正确！");
        }

    }

    public static void main(String[] args) throws IOException {
        // TODO Auto-generated method stub

        LR Re = new LR();
        System.setOut(new PrintStream("./output.txt"));
       

        Re.mainoperation();//主控程序


    }

}

