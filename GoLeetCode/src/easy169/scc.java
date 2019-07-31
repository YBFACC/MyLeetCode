package easy169;

import java.util.Currency;
import java.util.HashMap;
import java.util.Map;

public class scc {

    ////////////散列无法解决负数问题

//    public int majorityElement(int[] nums) {
//        int [] arry=new int[10000];
//        for(int height:nums){
//            arry[height]++;
//        }
//
//        for(int i=1;i<nums.length;i++){
//            int current=0;
//            while (arry[i]-- >0){
//                ++current;
//                if (current>(nums.length/2)){
//                    return i;
//                }
//            }
//        }
//        return 0;
//    }


    //暴力 时间：n^2超限
//    public int majorityElement(int[] nums) {
//        int majorityCount = nums.length/2;
//
//        for (int num : nums) {
//            int count = 0;
//            for (int elem : nums) {
//                if (elem == num) {
//                    count += 1;
//                }
//            }
//
//            if (count > majorityCount) {
//                return num;
//            }
//
//        }
//
//        return -1;
//    }


///////////////哈希表
//    public static Map<Integer, Integer> countNums(int[] nums) {
//        HashMap<Integer, Integer> counts = new HashMap<Integer, Integer>();
//        for (int num : nums) {
//            if (!counts.containsKey(num)) {
//                counts.put(num, 1);
//            }
//            else {
//                counts.put(num, counts.get(num)+1);
//            }
//        }
//        return counts;
//    }
//    public static int majorityElement(int[] nums) {
//        Map<Integer, Integer> counts = countNums(nums);
//
//        Map.Entry<Integer, Integer> majorityEntry = null;
//        for (Map.Entry<Integer, Integer> entry : counts.entrySet()) {
//            if (majorityEntry == null || entry.getValue() > majorityEntry.getValue()) {
//                majorityEntry = entry;
//            }
//        }
//        return majorityEntry.getKey();
//    }
//
//
//    public static void main(String[] args) {
//        int [] a={1,3,5,7,9,2,1,2,3,1};
//        System.out.println(majorityElement(a));
//    }


////////////////////////////分治
//
//    private int countInRange(int[] nums, int num, int lo, int hi) {
//        int count = 0;
//        for (int i = lo; i <= hi; i++) {
//            if (nums[i] == num) {
//                count++;
//            }
//        }
//        return count;
//    }
//
//    private int majorityE(int[] nums, int lo, int hi) {
//        // base case; the only element in an array of size 1 is the majority
//        // element.
//        if (lo == hi) {
//            return nums[lo];
//        }
//
//        // recurse on left and right halves of this slice.
//        int mid = (hi-lo)/2 + lo;
//        int left = majorityE(nums, lo, mid);
//        int right = majorityE(nums, mid+1, hi);
//
//        // if the two halves agree on the majority element, return it.
//        if (left == right) {
//            return left;
//        }
//
//        // otherwise, count each element and return the "winner".
//        int leftCount = countInRange(nums, left, lo, hi);
//        int rightCount = countInRange(nums, right, lo, hi);
//
//        return leftCount > rightCount ? left : right;
//    }
//
//    public int majorityElement(int[] nums) {
//        return majorityE(nums, 0, nums.length-1);
//    }

///////////////////Boyer-Moore 投票算法

    public static int majorityElement(int[] nums) {
        int count = 0;
        Integer candidate = null;

        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }

        return candidate;
    }


    public static void main(String[] args) {
        int [] a={1,3,5,7,9,2,1,2,3,1};
        System.out.println(majorityElement(a));
    }
}























