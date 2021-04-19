/**
 * 43. 字符串相乘
 * https://leetcode-cn.com/problems/multiply-strings/
 * 输入："11","99"
 * 输出："1089"
 */

function multiply(str1, str2) {
  if (str1 == '0' || str2 == '0') return '0'
  let res = [],
    i = str1.length - 1,
    j = str2.length - 1
  for (; i >= 0; i--) {
    let n1 = str1[i] - '0'
    j = str2.length - 1
    for (; j >= 0; j--) {
      let n2 = str2[j] - '0'
      res[i + j] = res[i + j] || 0
      res[i + j] += n1 * n2
    }
  }
  let index = res.length - 1
  while (index >= 1) {
    res[index - 1] += parseInt(res[index] / 10)
    res[index] %= 10
    index--
  }
  return res.join('')
}
console.log(multiply('2', '9133'))
