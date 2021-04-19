function node(value, left = null, right = null) {
  return {
    value,
    left,
    right,
  }
}

let left = node(3, node(1), node(2))
let right = node(6, node(4), node(5))
let head = node(7, left, right)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
/*
  7
 3  6
1 2 4 5
*/

let DFS = function (head) {
  if (!head) {
    return
  }
  console.log(head.value)
  DFS(head.left)
  DFS(head.right)
}
// 最大深度
let maxDepth = function (root) {
  if (root == null) {
    return 0
  } else {
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
}
// 最小深度
let minDepth = function (root) {
  if (root == null) {
    return 0
  } else {
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    return Math.min(left, right) + 1
  }
}
//广度优先遍历
/*
  7
 3  6
1 2 4 5
*/
function BFS(root) {
  let array = [root],
    i = 0,
    current
  while (i < array.length) {
    current = array[i]
    console.log(current.value)
    if (current.left) {
      array.push(current.left)
    }
    if (current.right) {
      array.push(current.right)
    }
    i++
  }
}
function BFS1(root) {
  let array = [root],
    i = 0,
    current = undefined,
    result = [],
    end = 0,
    temp = []
  while (i < array.length) {
    current = array[i]
    temp.push(current.val)
    if (current.left) {
      array.push(current.left)
    }
    if (current.right) {
      array.push(current.right)
    }
    if (i == end) {
      end = array.length - 1
      result.push(temp)
      temp = []
    }
    i++
  }
  return result
}
function BFS2(root) {
  let array = [root],
    i = 0,
    current = undefined,
    result = [],
    end = 0,
    temp = []
  while (i < array.length) {
    current = array[i]
    temp.push(current.value)
    if (current.left) {
      array.push(current.left)
    }
    if (current.right) {
      array.push(current.right)
    }
    if (i == end) {
      end = array.length - 1
      result.unshift(temp)
      temp = []
    }
    i++
  }
  return result
}
//翻转二叉树
var invertTree = function (root) {
  if (root.left) {
    left = invertTree(root.left)
  }
  if (root.right) {
    invertTree(root.right)
  }
  if (!root) return
}
// 对称二叉树
var isSymmetric = function (root) {
  if (root.left) {
    return isSymmetric(root.left) && isSymmetric(root.right)
  } else {
    console.log('root:', root)
    return root.left === root.right
  }
}
console.log(isSymmetric(head))

// console.log(minDepth(head))

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [[root]],
    i = 0
  while (i < result.length) {
    let temp = result[i]
    console.log(temp)
    let tempArr = temp.reduce((prev, next) => {
      next.left && prev.push(next.left)
      next.right && prev.push(next.right)
      return prev
    }, [])
    i++
    result.push(tempArr)
  }
  return result
}

function BFC(head) {
  let arr = [head],
    i = 0,
    current = null,
    sumArr = [],
    tempArr = [],
    end = 0
  while (i < arr.length) {
    current = arr[i]
    if (current.left) {
      arr.push(current.left)
    }
    if (current.right) {
      arr.push(current.right)
    }
    tempArr.push(current)
    if (i == end) {
      end = arr.length - 1
      console.log('tempArr:', tempArr)
      sumArr.push(tempArr)
      tempArr = []
    }
    i++
  }
  return sumArr.map((arr) => arr.reduce((prev, next) => prev + next.value, 0))
}
// console.log(BFC(head))
