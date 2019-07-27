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


///////////////
    public static Map<Integer, Integer> countNums(int[] nums) {
        Map<Integer, Integer> counts = new HashMap<Integer, Integer>();
        for (int num : nums) {
            if (!counts.containsKey(num)) {
                counts.put(num, 1);
            }
            else {
                counts.put(num, counts.get(num)+1);
            }
        }
        return counts;
    }
    public static int majorityElement(int[] nums) {
        Map<Integer, Integer> counts = countNums(nums);

        Map.Entry<Integer, Integer> majorityEntry = null;
        for (Map.Entry<Integer, Integer> entry : counts.entrySet()) {
            if (majorityEntry == null || entry.getValue() > majorityEntry.getValue()) {
                majorityEntry = entry;
            }
        }
        return majorityEntry.getKey();
    }


    public static void main(String[] args) {
        int [] a={1,3,5,7,9,2,1,2,3,1};
        System.out.println(majorityElement(a));
    }
}























