/**
力扣链接1：[102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
力扣链接2：[107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
 */

function node(val, left = null, right = null) {
  return {
    val,
    left,
    right,
  }
}
// let left1 = node(1)
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
console.log(head)

//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）
var levelOrder = function (root) {
  if (!root) return []
  let resArr = [],
    array = [root],
    i = 0,
    levelLastIndex = 0,
    temp = []
  while (i < array.length) {
    let current = array[i]
    if (current.left) {
      array.push(current.left)
    }
    if (current.right) {
      array.push(current.right)
    }
    temp.push(current.val)
    if (i == levelLastIndex) {
      levelLastIndex = array.length - 1
      resArr.push(temp)
      temp = []
    }
    i++
  }
  return resArr
}

var levelOrderBottom = function (root) {
  if (!root) return []
  let array = [root],
    i = 0,
    lastIndex = 0,
    temp = [],
    res = []
  while (i < array.length) {
    let current = array[i]
    if (current.left) {
      array.push(current.left)
    }
    if (current.right) {
      array.push(current.right)
    }
    temp.push(current.val)
    if (i == lastIndex) {
      // 在当前层的最后一项
      lastIndex = array.length - 1
      res.unshift(temp)
      temp = []
    }
    i++
  }
  return res
}

console.log(levelOrderBottom(head))
