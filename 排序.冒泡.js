// 冒泡
function sort(array) {
  let temp = undefined
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}
// 插排
function sort2(array) {
  let current = undefined
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] <= array[i]) {
      let start = i + 1
      current = array[start]
      while (start > 0) {
        start--
        if (array[start] > current) {
          array[start + 1] = array[start]
        }
      }
      array[start] = current
    }
  }
  return array
}
console.log(sort2([3, 2, 1, 5, 0]))
// [1,2,4,5]
