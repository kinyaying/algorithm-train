function node(val, left = null, right = null) {
  return {
    val,
    left,
    right,
  }
}
let left1 = node(1)
let left2 = node(3)
let left = node(2, left1, left2)
// let right1 = node(null)
// let right2 = node(3)
// let right = node(2, left2, left1)
// let head = node(1, left, right)
/*
树结构如下
  7
 3  6
1 2 4 5
*/
console.log(left)

// 深度优先
function isSymmetric(root) {
  return isMirror(root.left, root.right)
  function isMirror(node1, node2) {
    if (node1 === null && node2 === null) {
      return true
    }
    if (node1 === null || node2 === null) {
      return false
    }
    return (
      node1.val === node2.val &&
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
    )
  }
}
// 广度优先
function isSymmetric2(root) {
  let array = [root, root]
  while (array.length) {
    let left = array.pop()
    let right = array.pop()
    if (left == null && right == null) {
      continue
    }
    if (left == null || right == null) {
      return false
    }
    if (left.val !== right.val) {
      return false
    }
    array.push(left.left, right.right)
    array.push(left.right, right.left)
  }
  return true
}

console.log(isSymmetric2(left))
