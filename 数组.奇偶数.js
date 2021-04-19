function sort(arr) {
  let start = 0,
    end = arr.length - 1,
    temp
  while (start < end) {
    if (arr[start] % 2 == 0 && arr[end] % 2 == 1) {
      temp = arr[end]
      arr[end] = arr[start]
      arr[start] = temp
    } else if (arr[start] % 2 == 0) {
      end--
    } else if (arr[end] % 2 == 1) {
      start++
    } else {
      start++
      end--
    }
  }
  return arr
}

console.log(sort([2, 1, 4, 5, 8]))
