/**找出二叉树中某两个节点的第一个共同祖先，
不得将其他节点存储在另外的数据结构中

   3
  / \
  5 1
 /\ /\
6  20 8
  /\
 7  4

输入：root = [3,5,1,6,2,0,8,null,null,7,4]，p=5,q=1
输出：3
节点5和节点1的最近公共祖先是节点3

输入：root=[3,5,1,6,2,0,8,null,null,7,4]，p=5,q=4
输出：5
节点5和节点4的最近公共祖先节点是5
说明：
- 所有节点的值都是唯一的
- p,q为不同节点且均存在给定的二叉树中
*/

function node(val, left = null, right = null) {
  return {
    val,
    left,
    right,
  }
}
let left1 = node(6)
let left2 = node(2, node(7), node(4))
let left = node(5, left1, left2)
let right1 = node(0)
let right2 = node(8)
let right = node(1, right1, right2)
let head = node(3, left, right)
// console.log(head)
function FindNode(root, p, q) {
  if (!root || root.val == p || root.val == q) return root ? root.val : null
  let val1 = FindNode(root.left, p, q)
  let val2 = FindNode(root.right, p, q)
  if (val1 == null && val2 == null) {
    return null
  }
  if (val1 == null) {
    return right.val
  }
  if (val2 == null) {
    return left.val
  }
  return root.val
}

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left == null && right == null) return null
  if (left == null) return right
  if (right == null) return left
  return root
}
console.log(lowestCommonAncestor(head, left1, left2))
