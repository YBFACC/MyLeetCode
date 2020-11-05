class Solution {
    public int missingElement(int[] nums, int k) {
        int temp=0;
        int right=0;
        for(int i=1;i<nums.length;i++){
            if((nums[i]-nums[i-1])==1){continue;}
            else {
                temp+=nums[i]-nums[i-1]-1;
            }
            if(temp<k){continue;}
            else {
                right=nums[i]-temp+k-1;
                break;
            }
        }
        if(temp<k){right=nums[nums.length-1]+k-temp;}
        return right;
    }
}