/**
 * https://leetcode-cn.com/problems/powx-n/
 * @param {*} x
 * @param {*} n
 */
var myPow = function (x, n) {
  if (x == 0) return 0
  if (n < 0) {
    x = 1 / x
    n = -n
  } else if (n == 1) {
    return x
  } else if (n == 2) {
    return x * x
  }
  let newN = (n / 2) | 1,
    result = myPow(x, newN) * myPow(x, newN)
  if (n % 2 == 1) {
    result *= x
  }
  return result
}

console.log(myPow(2, -2))
