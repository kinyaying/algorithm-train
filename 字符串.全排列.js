/**
 * 剑指 Offer 38. 字符串的排列
 * https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 */
let k = 0
var permutation = function (s) {
  if (s.length === 1) return [s]
  let array = []
  for (let i = 0; i < s.length; i++) {
    let newS = s.slice(0, i) + s.slice(i + 1)
    let temp = permutation(newS)
    for (let j = 0; j < temp.length; j++) {
      array.push(s[i] + temp[j])
    }
  }
  return [...new Set(array)]
}
console.log(permutation('abc'), k) // 3*2*1*  6
