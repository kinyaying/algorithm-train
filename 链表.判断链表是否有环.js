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
let h3 = node(4, h2)
let h4 = node(5, h3)
h.next = h4
function isLoop(node) {
  let isloop = false
  while (node.next) {
    if (node.flag) {
      isloop = true
      break
    }
    node.flag = true
    node = node.next
  }
  return isloop
}
console.log(isLoop(h4))
// console.log(h4)
