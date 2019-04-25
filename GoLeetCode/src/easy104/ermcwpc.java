package easy104;

/* public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
       TreeNode(int x) { val = x; }*/


public class ermcwpc {

    public int maxDepth(TreeNode root) {
        return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }


}
