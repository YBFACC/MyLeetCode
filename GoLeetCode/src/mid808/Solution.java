package mid808;

import java.util.HashMap;
import java.util.Map;

class Solution {
    double res=0;
    HashMap<String,Double> map=new HashMap<String, Double>();
    public double soupServings(int N) {
        dfs(N,N,1);
    return  res;
    }
    public double dfs(int A,int B,double probability){
        String path = A+"-"+'B';
        if (map.containsKey(path)) {
            res += map.get(path);
            return map.get(path);
        }
        if (A <= 0 && B <= 0) {
            res += probability / 2;
            return probability / 2;
        }
        if (A <= 0) {
            res += probability;
            return probability;
        }
        if (B <= 0) {
            return 0;
        }
        double floor = 0;
        floor += dfs(A - 100, B, probability / 4);
        floor += dfs(A - 75, B - 25, probability / 4);
        floor += dfs(A - 50, B - 50, probability / 4);
        floor += dfs(A - 25, B - 75, probability / 4);

        map.put(path, floor);

        return floor;
    }
}