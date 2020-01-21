package mid915;

class Solution {
    public int partitionDisjoint(int[] A) {
        int leftMax = A[0], curMax = A[0], index = 0;
        for (int i = 1; i < A.length; i++) {
            if (leftMax < A[i]) {
                curMax = Math.max(curMax, A[i]);
            } else if (leftMax > A[i]) {
                index = i;
                leftMax = curMax;
            }
        }
        return index + 1;
    }

    public static void main(String[] args) {
        Solution test = new Solution();
        int a[] = {5, 0, 3, 8, 6};
        test.partitionDisjoint(a);
    }
}