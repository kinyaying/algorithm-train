/**
 * 剑指 Offer 63. 股票的最大利润
 * https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
 * 给定一个整数数组，请找出两个元素之间的最大差，较小值的元素必须位于较大元素之前
 * const array = [7, 8, 15, 9, 20, 3, 1, 10];
   findLargestDifference(array) -> 7和20
 */
function findLargestDifference1(array) {
  //TODO
  let result = 0,
    currentDiff
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      currentDiff = array[j] - array[i]
      if (currentDiff > result) {
        result = currentDiff
      }
    }
  }
  return result
}

function findLargestDifference2(array) {
  if (array.length <= 1) return 0
  let current = array[0],
    diff = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i] > current && array[i] - current > diff) {
      diff = array[i] - current
    }
    if (array[i] < current) {
      current = array[i]
    }
  }
  return diff
}
function findLargestDifference(array) {
  let maxProfit = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const profit = array[j] - array[i]
      maxProfit = profit > maxProfit ? profit : maxProfit
    }
  }
  return maxProfit
}
// const array = [7, 8, 15, 9, 20, 3, 1, 10, 30]
const array = [4, 3, 2, 1]
console.log(findLargestDifference(array))
