// 翻转数字
// 翻转数组
// 字符串+双指针
function reverse(num) {
  let arr = num.toString().split(''),
    start = 0,
    end = arr.length,
    temp
  while (start < end) {
    temp = arr[end]
    arr[end] = arr[start]
    arr[start] = temp
    start++
    end--
  }
  return Number(arr.join(''))
}

function node(value, left = null, right = null) {
  return {
    value,
    left,
    right,
  }
}
let r1 = node(1, { value: 1, left: null, right: null }, null)
let r2 = node(2)
let r = node(3, r1, r2)
let l1 = node(4)
let l2 = node(5)
let l = node(6, l1, l2)
let head = node(7, l, r)
//翻转二叉树
/**
 * node:
 * - null
 *
 * @param {*} node
 * @returns
 */
function reverse1(node) {
  if (!node) return node
  reverse1(node.left)
  reverse1(node.right)
  let temp = node.left
  node.left = node.right
  node.right = temp
}
console.log('head:', head)
function reverse2(node) {
  let arr = [node],
    i = 0,
    temp,
    current
  while (i < arr.length) {
    current = arr[i]
    if (current.left) {
      arr.push(current.left)
    }
    if (current.right) {
      arr.push(current.right)
    }
    let temp = current.left
    current.left = current.right
    current.right = temp
    i++
  }
}

function calHeight(node, height = 0) {
  if (!node) return 0
  height += Math.max(calHeight(node.left), calHeight(node.right)) + 1
  return height
}

let maxDepth = function (root) {
  if (root == null) {
    return 0
  } else {
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
}

/**
 * 广度优先：计算树的深度
 * 1. 使用数组保存每个节点
 * 2. 使用两个指针，i索引，last是当前层最后一项
 * 3. 层级切换的条件（关键）
 * if (i == last) {
      last = arr.length - 1
      height++
    }
 * O(n)
 * @param {} node 
 * @returns 
 */
function calHeight1(node) {
  if (!node) return 0
  let arr = [node],
    i = 0,
    last = 0,
    current,
    height = 0
  while (i < arr.length) {
    current = arr[i]
    if (current.left) {
      arr.push(current.left)
    }
    if (current.right) {
      arr.push(current.right)
    }
    if (i == last) {
      last = arr.length - 1
      height++
    }
    i++
  }
  return height
}

function moslems(str) {
  str = '' + str
  let start = 0,
    end = str.length - 1,
    flag = true
  while (start < end) {
    if (str[start] === str[end]) {
      start++
      end--
    } else {
      flag = false
      break
    }
  }
  return flag
}

console.log('res:', moslems(1231))
