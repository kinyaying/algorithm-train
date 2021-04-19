/**
 * 给定一个整数数组，找到从三个整数中产生的最大乘积
 * const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
computeProduct(unsortedArray); // 21000
 */

const unsortedArray1 = [-10, 7, 29, 30, 5, -10, -70]
const unsortedArray = [-10, 7, 9, 10]
const unsortedArray2 = [-10, -7, -9, 10]
/**
 * 3个正
 * 2负1正
 * 最大的正数确定了
 */
function computeProduct1(unsortedArray) {
  if (unsortedArray.length < 3) return '数组长度要大于3'
  let array = unsortedArray.sort((a, b) => a - b)
  let fushu = array[0] * array[1]
  let zhengshu = array[array.length - 2] * array[array.length - 3]
  if (fushu > zhengshu) {
    return fushu * array[array.length - 1]
  } else {
    return zhengshu * array[array.length - 1]
  }
}

function sortIntegers(a, b) {
  return a - b
}

function computeProduct(unsorted) {
  const sortedArray = unsorted.sort(sortIntegers)
  const array_n_element = sortedArray.length - 1

  let product1 = 1
  let product2 = 1

  for (let x = array_n_element; x > array_n_element - 3; x--) {
    product1 = product1 * sortedArray[x]
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element]

  if (product1 > product2) return product1

  return product2
}
// console.log(computeProduct(unsortedArray)) // 21000
