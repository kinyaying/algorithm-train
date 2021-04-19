/**
 * const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
 * unique(array); // [1, 2, 3, 5, 9, 8]
 */
// 1. set
function unique(array) {
  return [...new Set(array)]
  // return Array.from(new Set(array))
}
// 2. []
function unique2(array) {
  const tempArray = []
  array.forEach((item) => {
    if (tempArray.indexOf(item) == -1) {
      tempArray.push(item)
    }
  })
  return tempArray
}

// 3. {}
function unique3(array) {
  const object = {},
    result = []
  for (var i = 0; i < array.length; i++) {
    if (!object.hasOwnProperty(array[i])) {
      object[array[i]] = 1
      result.push(array[i])
    }
  }
  return result
}
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
console.log(unique(array))
