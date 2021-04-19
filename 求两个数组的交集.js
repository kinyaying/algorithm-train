/**
 * 求两个数组的交集
 * const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
intersection(firstArray, secondArray); // [2, 1]
 */

const firstArray = [2, 2, 4, 1]
const secondArray = [1, 2, 0, 2]
function intersection(firstArray, secondArray) {
  let s1 = new Set(firstArray)
  let s2 = new Set(secondArray)
  let result = []
  s1.forEach((item) => {
    if (s2.has(item)) {
      result.push(item)
    }
  })
  return result
  // return secondArray.reduce((prev, next) => {
  //   if (s1.has(next)) {
  //     prev.push(next)
  //   }
  //   return prev
  // }, [])
}
function intersection1(arr1, arr2) {
  let s2 = new Set(arr2)
  return arr1.filter((one) => s2.has(one))
}

// 求并集, 类似于数组去重
function union(arr1, arr2) {
  let s = new Set([...arr1, ...arr2])
  return [...s]
}
function union1(arr1, arr2) {
  let arr = [...arr1, ...arr2]
  return [...new Set(arr)]
}

function union2(arr1, arr2) {
  let obj = {},
    arr = [...arr1, ...arr2],
    result = []
  arr.forEach((i) => {
    obj[i] = i
  })
  Array.prototype.forEach.call(obj, (i) => {
    console.log(i)
  })
  for (let key in obj) {
    result.push(obj[key])
  }
  return result
}
// console.log(intersection(firstArray, secondArray)) // [2, 1]
console.log(union(firstArray, secondArray))
