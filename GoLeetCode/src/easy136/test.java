package easy136;

import java.util.Arrays;
import java.util.HashSet;

public class test {


    public int singleNumber(int[] nums) {
        int len = nums.length;
        HashSet<Integer> hash = new HashSet<Integer>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i += 2) {
            if (i == nums.length - 1) {
                return nums[i];
            } else if (nums[i] != nums[i + 1]) {
                return nums[i];
            }
        }
        return nums[len];



        //222222222222222   异或

        public int singleNumber(int[] nums) {
            int result = 0;
            for(int i = 0;i<nums.length;i++){
                result ^= nums[i];
            }
            return result;
        }

    }


}