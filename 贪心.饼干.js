/**
 * https://leetcode-cn.com/problems/assign-cookies/
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
输入: g = [1,2,3,5], s = [1,1]
输出: 1
输入: g = [1,2], s = [1,2,3]
输出: 2
 */
function find(target, array) {
  let start = 0
  let end = array.length,
    middle = 0
  while (start < end) {
    middle = Math.floor((start + end) / 2)
    if (array[middle] >= target) {
      end = middle
    } else {
      start = middle + 1
    }
  }
  return start
}
// g胃口 s饼干
function giveCookies(g, s) {
  let nums = 0
  s = s.sort((a, b) => a - b)
  for (let i = 0; i < g.length; i++) {
    let index = find(g[i], s)
    console.log('index:', g[i], s, index, s[index])
    if (s[index] >= 0) {
      nums++
      s.splice(index, 1)
    }
  }
  return nums
}
// [ 7, 8, 9, 10 ] 10
// console.log(giveCookies([10, 9, 8, 7], [10, 9, 8, 7]))
// children胃口 cookies饼干
function findContentChildren(children, cookies) {
  children = children.sort((a, b) => a - b)
  cookies = cookies.sort((a, b) => a - b)
  let index = 0
  cookies.forEach((cookie, i) => {
    if (cookie >= children[index]) {
      index++
    }
  })
  return index
}
// g胃口 s饼干
function findContentChildren1(children, cookies) {
  children = children.sort((a, b) => a - b)
  cookies = cookies.sort((a, b) => a - b)
  let count = 0,
    index = 0
  for (let i = 0; i < children.length; i++) {
    while (children[i] > cookies[index]) {
      index++
    }
    if (children[i] <= cookies[index]) {
      count++
    }
    if (index >= cookies.length) {
      return count
    }
  }
  return count
}
console.log(findContentChildren1([1, 2], [1, 2, 3]))
