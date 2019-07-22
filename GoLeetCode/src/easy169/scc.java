package easy169;

import java.util.Currency;

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
    public int majorityElement(int[] nums) {
        int majorityCount = nums.length/2;

        for (int num : nums) {
            int count = 0;
            for (int elem : nums) {
                if (elem == num) {
                    count += 1;
                }
            }

            if (count > majorityCount) {
                return num;
            }

        }

        return -1;
    }


}
