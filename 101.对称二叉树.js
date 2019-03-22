/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (45.48%)
 * Total Accepted:    24.6K
 * Total Submissions: 54K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 * 说明:
 *
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSame(left, right) {
    if (!left && !right) return true;
    if (!left || !right || right.val != left.val) return false;
    return isSame(left.right, right.left) && isSame(left.left, right.right);
}
var isSymmetric = function(root) {
    if (!root) return true;
    return isSame(root.left, root.right);
};

var isSymmetric = function(root) {
    if (root === null) return true;
    let nodes1 = [root];
    while (nodes1.length) {
        let len = nodes1.length;
        for (let i = 0; i < Math.ceil(len / 2); i++) {
            if (nodes1[i].val !== nodes1[len - 1 - i].val) {
                return false;
            }
            if (nodes1[i].left === null && nodes1[len - 1 - i].right !== null) {
                return false;
            }
            if (nodes1[i].right === null && nodes1[len - 1 - i].left !== null) {
                return false;
            }
        }
        while (len--) {
            let node = nodes1.pop();
            if (node.left && node.right) {
                nodes1.unshift(node.left);
                nodes1.unshift(node.right);
            } else if (node.left === null && node.right !== null) {
                nodes1.unshift(new TreeNode(null));
                nodes1.unshift(node.right);
            } else if (node.left !== null && node.right === null) {
                nodes1.unshift(node.left);
                nodes1.unshift(new TreeNode(null));
            }
        }
    }
    return true;
};
