package easy905;

public class Test {
    public int[] sortArrayByParity(int[] A) {
        int left = 0;
        int right = A.length - 1;
        int temp;
        while (left < right) {
            if ((A[left] & 1) == 1 && (A[right] & 1) == 0) {
                temp = A[left];
                A[left] = A[right];
                A[right] = temp;
            } else if ((A[left] & 1) == 0) {
                left++;
            } else if ((A[right] & 1) == 1) {
                right--;
            }
        }
        return A;
    }


    public static void main(String[] args) {
        Test t = new Test();
        int[] aaaa = {3, 1, 2, 4};
        t.sortArrayByParity(aaaa);
    }
}