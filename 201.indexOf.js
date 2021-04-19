/**
 * 查找数组元素位置
 * https://www.nowcoder.com/questionTerminal/e7835a8113dd48afb15f77ef8d1dcb1d

 Problem:  找出元素item在给定数组arr中的位置
 描述：如果数组中存在item就返回元素在数组中的位置，否则就会返回-1
 [1,2,3,4,5,6] --> 存在3就输出2，存在7输出-1
*/

function indexOf(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i
    }
  }
  return -1
}
// console.log(indexOf([1, 2, 3], 2))
