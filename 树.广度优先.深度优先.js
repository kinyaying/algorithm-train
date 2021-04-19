function node(value, left = null, right = null) {
  return {
    value,
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
  7
 3  6
1 2 4 5
*/
function DFS(node) {
  if (node.left) {
    DFS(node.left)
  }
  console.log(node.value)

  if (node.right) {
    DFS(node.right)
  }
}
// DFS(head)

function BFS(head) {
  var arr = [],
    index = 0,
    sum = 0
  arr.push([head])
  let current
  while (index <= arr.length - 1) {
    current = arr[index] // [left, right] []
    let result = current.reduce((prev, next) => {
      let temp = []
      if (next.left) {
        temp.push(next.left)
      }
      if (next.right) {
        temp.push(next.right)
      }
      prev = prev.concat(temp)
      sum += next.value
      return prev
    }, [])
    if (result.length > 0) {
      arr.push(result)
    }
    index++
  }
  console.log(sum)
  return arr
}
// let arr = BFS(head)
// let sum = arr.reduce((prev, next) => {
//   prev += next.reduce((p, n) => p + n.value, 0)
//   return prev
// }, 0)
function BFS(head) {
  let arr = [head],
    i = 0,
    sumArr = [],
    sum = 0,
    end = 0
  while (i < arr.length) {
    sum += arr[i].value
    if (arr[i].left) {
      arr.push(arr[i].left)
    }
    if (arr[i].right) {
      arr.push(arr[i].right)
    }
    console.log(arr[i].value)
    if (i == end) {
      end = arr.length - 1
      sumArr.push(sum)
      sum = 0
    }
    i++
  }
  console.log(sumArr)
}
BFS(head)
