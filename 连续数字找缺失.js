/**
 * 一个未排序的数组包含 n 个连续数字中的（n-1）个数字，找到缺失的数字，要求时间复杂度为 O(n)
const arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
const upperBound = 9;
const lowerBound = 1;

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8
 */

const arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7]
const upperBound = 9
const lowerBound = 1
// set
function findMissingNumber(arrayOfIntegers, end, start) {
  let s = new Set(arrayOfIntegers)
  for (i = start; i < end; i++) {
    if (!s.has(i)) {
      return i
    }
  }
  return null
}
// 求和
function findMissingNumber1(arrayOfIntegers, upperBound, lowerBound) {
  let sumOfIntegers = 0
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    sumOfIntegers += arrayOfIntegers[i]
  }

  theoreticalSum =
    ((lowerBound + upperBound) * (upperBound - lowerBound + 1)) / 2
  return theoreticalSum - sumOfIntegers
}

let r = findMissingNumber1(arrayOfIntegers, upperBound, lowerBound) // 8
console.log(r)
