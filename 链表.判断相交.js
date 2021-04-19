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
let h3 = node(4)
let h4 = node(5, h3)
h.next = h4
function hasSameNode(node1, node2) {
  let hasSameNode = false
  while (node1.next) {
    node1.flag = true
    node1 = node1.next
  }
  while (node2.next) {
    if (node2.flag) {
      hasSameNode = true
    }
    node2 = node2.next
  }
  return hasSameNode
}
console.log(hasSameNode(h2, h4))
// console.log(h4)
