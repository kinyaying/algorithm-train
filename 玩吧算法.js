// 实现排序，arr2 里的key按照arr1的数字进行排序
function test(arr1, arr2) {
  let length = arr2.length
  let result = new Array(length)
  for (let i = 0; i < arr2.length; i++) {
    let key = Number(Object.keys(arr2[i])[0])
    let index = arr1.indexOf(key)
    if (index !== -1) {
      result[index] = arr2[i]
    }
  }
  return result
}
test([1, 3, 2, 4], [{ 1: 1 }, { 2: 1 }, { 3: 1 }, { 4: 1 }])
