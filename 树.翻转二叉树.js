function node(val, left = null, right = null) {
  return {
    val,
    left,
    right,
  }
}
let left1 = node(1)
let left2 = node(2)
let left = node(3, left1, left2)
let right1 = node(4)
let right2 = node(5)
let right = node(6, right1, right2)
let head = node(7, left, right)
/*
树结构如下
  7
 3  6
1 2 4 5
*/

var invertTree = function (root) {
  if (!root) return root
  invertTree(root.left)
  invertTree(root.right)
  let temp = null
  temp = root.left
  root.left = root.right
  root.right = temp
  return root
}
invertTree(head)
console.log(head)
