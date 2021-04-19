/**
 * 1. 分成两个有序数组
 * 2. 两个有序数组合并成一个数组
 * @param {*} array
 */
function sort(array) {
  if (array.length <= 1) return array
  let start = 0,
    end = array.length - 1,
    current = array[start]
  while (start < end) {
    while (array[end] > current && end > start) {
      end--
    }
    if (end == start) break
    array[start] = array[end]
    start++
    while (array[start] < current && end > start) {
      start++
    }
    if (end == start) break
    array[end] = array[start]
    end--
  }
  array[end] = current
  let left = array.slice(0, end)
  let right = array.slice(end + 1)
  return [...sort(left), current, ...sort(right)]
}

function quickSort(array, start = 0, end = array.length - 1) {
  let s = start,
    e = end
  if (start >= end) return array
  let current = array[start]
  while (start < end) {
    while (current < array[end] && start < end) {
      end--
    }

    if (end == start) break
    array[start] = array[end]
    start++

    while (current > array[start] && start < end) {
      start++
    }
    if (start == end) break
    array[end] = array[start]
    end--
  }
  array[start] = current
  quickSort(array, s, end - 1)
  quickSort(array, end + 1, e)
}
let arr = [1, 7, 0, 3, 2]
quickSort(arr)
console.log(arr)

// [1,2,4,5]
