// 给定一个整数数组，返回一个数组，其中 output [i] 等于自身以外的所有元素的乘积，
// 要求时间复杂度为 O(n)
/**
 * const firstArray = [2, 2, 4, 1];
const secondArray = [0, 0, 0, 2];
const thirdArray = [-2, -2, -3, 2];

productExceptSelf(firstArray); // [8, 8, 4, 16]
productExceptSelf(secondArray); // [0, 0, 0, 0]
productExceptSelf(thirdArray); // [12, 12, 8, -12]
 */

const firstArray = [2, 2, 4, 1]
const secondArray = [0, 0, 0, 2]
const thirdArray = [-2, -2, -3, 2]
function productExceptSelf1(array) {
  let total = 1,
    zeroNum = 0,
    zeroIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      zeroNum++
      zeroIndex = i
    } else {
      total *= array[i]
    }
  }
  let result = new Array(array.length).fill(0)
  if (zeroNum > 1) {
    return result
  } else if (zeroNum == 1) {
    result[zeroIndex] = total
    return result
  } else {
    for (let i = 0; i < array.length; i++) {
      result[i] = total / array[i]
    }
    return result
  }
}

function productExceptSelf(numArray) {
  let product = 1
  const size = numArray.length
  const output = []

  for (let x = 0; x < size; x++) {
    output.push(product)
    product = product * numArray[x]
  }
  console.log(output)

  let product2 = 1
  for (let i = size - 1; i > -1; i--) {
    output[i] = output[i] * product2
    product2 = product2 * numArray[i]
  }

  return output
}
console.log(productExceptSelf(firstArray)) // [8, 8, 4, 16]
console.log(productExceptSelf(secondArray)) // [0, 0, 0, 0]
console.log(productExceptSelf(thirdArray)) // [12, 12, 8, -12]
