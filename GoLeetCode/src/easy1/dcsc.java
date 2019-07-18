package easy1;

import java.util.HashMap;
import java.util.Map;

/////////////////////////////////////////////////1.暴力
public class dcsc {
//    public int[] twoSum(int[] nums, int target) {
//        for (int i = 0; i < nums.length; i++) {
//            for (int j = i + 1; j < nums.length; j++) {
//                if (nums[i] + nums[j] == target) {
//                    return new int[]{i, j};
//                }
//            }
//        }
//        return null;
//    }

    //////////////////////////  2.两遍哈希表
//    public int[] twoSum(int[] nums, int target) {
//        Map<Integer, Integer> map = new HashMap<>();
//        for (int i = 0; i < nums.length; i++) {
//            map.put(nums[i], i);
//        }
//        for (int i = 0; i < nums.length; i++) {
//            int complement=target-nums[i];
//            if(map.containsKey(complement)&&map.get(complement)!=i){
//                return new int[]{i,map.get(complement)};
//            }
//        }
//        return null;
//    }

////////////////////////////////// 3.一遍哈希表
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map=new HashMap<>();
        for (int i=0;i<nums.length;i++){
            int complement=target-nums[i];
            if(map.containsKey(complement)){
                return new  int[]{map.get(complement),i};
            }
            map.put(nums[i],i);
        }
        return null;
    }
}
