function node(value, next = null) {
  if (!value) return value
  return {
    value,
    next,
  }
}
let h = node(1)
let h1 = node(2, h)
let h2 = node(3, h1)
// h2 = h2.next
// let h3 = node(4, h2)
// let h4 = node(5, h3)
function deleteNode(node, n) {
  let current = node
  if (n == 0) {
    return node.next
  } else {
    let i = 0
    while (current.next) {
      if (i == n - 1) {
        current.next = current.next.next
        break
      }
      current = current.next
      i++
    }
    return node
  }
}
function deleteNodeLast(head, n) {
  let node = head,
    i = 0
  while (node.next) {
    node.i = i
    node = node.next
    i++
  }
  node.i = i
  node = head
  if (n === i) {
    head = head.next
  } else {
    while (node.next) {
      if (node.i + n + 1 == i) {
        console.log(node.next)
        node.next = node.next.next
        break
      }
      node = node.next
    }
  }
  return head
}
console.log(h2)

console.log(deleteNodeLast(h2, 2))
// console.log(h4)
