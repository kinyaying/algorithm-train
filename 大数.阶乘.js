/**
 * 计算阶乘（大数相乘）
 * [1]
 * [2]
 * [6]
 * [4,2]
 * [0,2,1]
 * @param {*} nums
 */
function fn(nums) {
  let res = [1],
    count = 1,
    index = 0,
    carry = 0
  while (count <= nums) {
    index = 0
    while (index < res.length) {
      res[index] = res[index] * count + carry
      if (res[index] > 10) {
        carry = parseInt(res[index] / 10)
        res[index] = res[index] % 10
      } else {
        carry = 0
      }
      index++
    }
    if (carry != 0) {
      res.push(carry)
      carry = 0
    }
    count++
  }
  return res.reverse().join('')
}

console.log(fn(50))
