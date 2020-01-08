import java.io.*;
import java.util.ArrayList;

/*
编号规定:
001:加法运算符
002:减法运算符
003:乘法运算符
004:除法运算符
005:左括号
013:右括号
008.标识符
010.整数
011.等号运算符
012.浮点数
014:错误字段
*/
public class cifafenxiqi {
    private static char[] Code;//转化为字符数组
    public static ArrayList<String> tokens=new ArrayList<>();//用于之后的语法分析传值使用

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(new File("./input.txt")));
        String s = br.readLine();
        //String s = "abc2@e=num2+12.3.23)*123-12.#";//输入符号串
       // String s = "A1=1.2+3*(4-6/3)#";//表达式为A1=1.2+3*(4-6/3)

        StringBuffer sb=new StringBuffer();
        StartLexicalAnalysis(s,sb);
    }

    public static void output(StringBuffer sb) throws IOException {
        File file = new File("./output.txt");; // 相对路径，如果没有则要建立一个新的output。txt文件
        file.createNewFile(); // 创建新文件
        FileOutputStream out=new FileOutputStream(file,false);
        out.write(sb.toString().getBytes("utf-8")); // \r\n即为换行
        out.flush(); // 把缓存区内容压入文件
        out.close(); // 最后记得关闭文件
    }


    public static void StartLexicalAnalysis(String s,StringBuffer sb) throws IOException {//开始进行语法分析
        if (IsCode(s,sb)) {//判断
            sb.append("当前输入符号为：" + s.substring(0,s.length()-1)+"\n");
            sb.append("词法分析结果如下：\n");
            StartState(0, 0,sb);
        }
    }
    private static boolean IsCode(String s,StringBuffer sb) throws IOException {//判断源代码是否为空，为空则不能进行词法分析
        if (s.isEmpty()||s.toCharArray()[0]=='#') {
            sb.append("源代码为空，无法进行词法分析！\n");
            return false;
        }
        else {
            Code = s.toCharArray();
            return true;
        }

    }

    private static void StartState(int basicPointer, int currentPointer,StringBuffer sb) throws IOException//状态0，初始状态
    {

        if (Code[currentPointer] == '#') {
            sb.append("词法分析结束\n");
            output(sb);
        }
        else if (IsEqual(Code[currentPointer]))//如果当前字符是等于号进入EqualState
        {
            EqualState(currentPointer,sb);
        }
        else if (IsAdd(Code[currentPointer]))//如果当前字符是加号进入AddState
        {
            AddState(currentPointer,sb);
        }
        else if (IsSub(Code[currentPointer]))//如果当前字符是减号进入SubState
        {
            SubState(currentPointer,sb);
        }
        else if (IsMul(Code[currentPointer]))//如果当前字符是乘号进入MulState
        {
            MulState(currentPointer,sb);
        }
        else if (IsDiv(Code[currentPointer]))//如果当前字符是除号进入DivState
        {
            DivState(currentPointer,sb);
        }
        else if (IsLParent(Code[currentPointer]))//如果当前字符是左括号进入LParentState
        {
            LParentState(currentPointer,sb);
        }
        else if (IsRParent(Code[currentPointer]))//如果当前字符是右括号进入RParentState
        {
            RParentState(currentPointer,sb);
        }

        else if (IsAlpha(Code[currentPointer]))//如果当前字符是字母号进入IdentState
        {
            IdentState(basicPointer, currentPointer + 1,sb);//是字母就进入状态6
        }
        else if (IsDigit(Code[currentPointer]))//如果当前字符是数字进入IntState
        {
            IntState(basicPointer, currentPointer + 1,sb);//是数字就进入状态7
        }
        else {

            sb.append("(014,错误，" + Code[currentPointer] + ")\n");
            String tempSt="014,"+Code[currentPointer];
            tokens.add(tempSt);
            StartState(basicPointer + 1, currentPointer + 1,sb);
        }
    }

    private static void EqualState(int j,StringBuffer sb) throws IOException//表示字符为等号运算符
    {
        sb.append("(011，等于号，" + Code[j] + ")\n");
        String tempSt="011,"+Code[j];
        tokens.add(tempSt);
        StartState(j + 1, j + 1,sb);
    }

    private static void AddState(int j,StringBuffer sb) throws IOException//表示字符为加法运算符
    {
        sb.append("(001，加号，" + Code[j] + ")\n");
        String tempSt="001,"+Code[j];
        tokens.add(tempSt);
        StartState(j + 1, j + 1,sb);
    }

    private static void SubState(int j,StringBuffer sb) throws IOException//表示字符为减法运算符
    {
        sb.append("(002，减号，" + Code[j] + ")\n");
        String tempSt="002,"+Code[j];
        tokens.add(tempSt);
        StartState(j + 1, j + 1,sb);
    }

    private static void MulState(int j,StringBuffer sb) throws IOException//表示字符为乘法运算符
    {
        sb.append("(003，乘号，" + Code[j] + ")\n");
        String tempSt="003,"+Code[j];
        tokens.add(tempSt);
        StartState(j + 1, j + 1,sb);
    }

    private static void DivState(int j,StringBuffer sb) throws IOException//表示字符为除法运算符
    {
        sb.append("(004，除号，" + Code[j] + ")\n");
        String tempSt="004,"+Code[j];
        tokens.add(tempSt);
        StartState(j + 1, j + 1,sb);
    }

    private static void LParentState(int j,StringBuffer sb) throws IOException//字符为左括号
    {
        sb.append("(005，左括号，" + Code[j] + ")\n");
        String tempSt="005,"+Code[j];
        tokens.add(tempSt);
        StartState(j + 1, j + 1,sb);
    }

    private static void RParentState(int j,StringBuffer sb) throws IOException//字符为右括号
    {
        sb.append("(0013，右括号，" + Code[j] + ")\n");
        String tempSt="013,"+Code[j];
        tokens.add(tempSt);
        StartState(j + 1, j + 1,sb);
    }

    private static void IdentState(int i, int j,StringBuffer sb) throws IOException//标识符
    {
        //Code[i]为准标识符的第一个字符，是个字母 ,而Code[j-1]是字母或数字
        if (IsDigit(Code[j]) || IsAlpha(Code[j]))
        //如果当前字符仍然为字母或数字则再次进入IdentState
        {
            IdentState(i, j + 1,sb);
        } else//如果当前字符为非数字及字母字符，则表明Code[i]~Code[j-1]这一段是标识符
        {
            sb.append("(008,标识符，");
            String tempSt="008,";
            printA(i, j, tempSt,sb);
        }
    }

    private static void IntState(int i, int j,StringBuffer sb) throws IOException//状态7，准实数
    {
        //Code[i]为准实数的第一个字符，是个字母 ,而Code[j-1]是数字或小数点
        if (IsDigit(Code[j]))//如果当前字符仍然是数字，则再次进入IntState
        {
            IntState(i, j + 1,sb);
        }
        if (Code[j] == '.')//如果当前字符是小数点，进入PointState
        {
            PointState(i, j + 1,sb);
        }
        if ((Code[j] != '.') && !IsDigit(Code[j]))
        //如果当前字符既不为小数点也不是数字 ，则表明Code[i]~Code[j-1]这一段是个实数
        {
            sb.append("(010,整数，");
            String tempSt="010,";
            printA(i, j, tempSt,sb);
        }
    }

    private static void PointState(int i, int j,StringBuffer sb) throws IOException//整数后接个小数点的中间态
    {
        //Code[i]~Code[j-1]之中含有小数点
        if (!IsDigit(Code[j])) {//小数点后还是小数点或者不是数字时报错
            sb.append("(014,错误，\n");
            String tempSt="014,";
            int q = i;//从Code[i]开始算起
            while ((IsDigit(Code[q])) || (Code[q]) == '.')
            //直接相连的数字或小数点都属于这个无效字段的一部分
            {
                tempSt=tempSt+Code[q];
                sb.append(Code[q]+"\n");
                q++;
            }
            sb.append(")\n");
            tokens.add(tempSt);
            //Code[q]此时为无效字段的下一个字符
            StartState(q, q,sb);

        }
        if (IsDigit(Code[j]))//如果当前字符是数字，则进入FloatState
        {
            FloatState(i, j + 1,sb);
        }
    }

    private  static void FloatState(int i,int j,StringBuffer sb) throws IOException {

        if (IsDigit(Code[j]))//如果当前字符是数字，则再次进入FloatState
        {
            FloatState(i, j + 1,sb);
        }
        if (!IsDigit(Code[j]))
        //如果当前字符是非数字字符，说明Code[i]~Code[j-1]这一段是浮点数
        {
            sb.append("(012,浮点数，");
            String tempSt="012,";
            printA(i, j, tempSt,sb);
        }
    }

    private static void printA(int i, int j, String tempSt,StringBuffer sb) throws IOException {//用于输出非单一字符
        for (int k = i; k < j; k++) {
            tempSt = tempSt + Code[k];
            sb.append(Code[k]+"");
        }
        sb.append(")\n");
        tokens.add(tempSt);
        StartState(j, j,sb);
    }

    private static boolean IsEqual(char ch) {//判断是否是字符'='
        return ch == '=';
    }

    private static boolean IsAdd(char ch)//判断是否是字符'+'
    {
        return ch == '+';
    }

    private static boolean IsSub(char ch)//判断是否是字符'-'
    {
        return ch == '-';
    }

    private static boolean IsMul(char ch)//判断是否是字符'*'
    {
        return ch == '*';
    }

    private static boolean IsDiv(char ch)//判断是否是字符'/'
    {
        return ch == '/';
    }

    private static boolean IsLParent(char ch)//判断是否左括号
    {
        return ch == '(';
    }

    private static boolean IsRParent(char ch)//判断是否是有括号
    {
        return ch == ')';
    }

    private static boolean IsDigit(char ch) {//判断是否是数字
        return Character.isDigit(ch);
    }

    private static boolean IsAlpha(char ch) {//判断是否是字母
        return Character.isLetter(ch);
    }
}
