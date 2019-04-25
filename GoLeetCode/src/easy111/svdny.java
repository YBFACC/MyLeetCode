package easy111;

public class svdny {
    public int minDepth(TreeNode root) {
        return root == null ? 0 : Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
}
