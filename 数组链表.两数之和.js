/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
1. 搞映射表
2. 找对应的target-arr[i]
不用排序
 */
var twoSum1 = function (nums, target) {
  let length = nums.length
  if (length.length < 2) {
    return []
  }

  let map = nums.reduce((prev, next, i) => {
    let temp = prev.get(next) || []
    temp.push(i)
    prev.set(next, temp)
    return prev
  }, new Map())
  nums = nums.sort((a, b) => a - b)
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let one = nums[i]
    if (map.get(target - one) != undefined) {
      let first = map.get(one)
      let second = map.get(target - one)
      result = [first.pop(), second.pop()]
      break
    }
  }
  return result
}

var sort = function (array) {
  let length = array.length
  let j = 0,
    temp = array[j]
  for (let i = 1; i < length; i++) {
    if (array[j] > array[i]) {
      temp = array[i]
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j]
        j--
      }
      j++
      array[j] = temp
    } else {
      j++
    }
  }
  return array
}
/**
 * 两数之和 —— n数之和
 * @param {} nums
 * @param {*} target
 * @returns
 */
var twoSum = function (nums, target) {
  let result = [],
    m = new Map()
  for (let i = 0; i < nums.length; i++) {
    let temp = m.get(nums[i]) || []
    temp.push(i)
    m.set(nums[i], temp)
  }
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let other = target - nums[i]
    console.log(m, other)
    let iArr = m.get(nums[i])
    if (iArr != undefined) {
      result = [m.get(nums[i]).pop(), m.get(other).pop()]
      break
    }
  }
  console.log(result)
  return result
}
function twoSum2(array, target) {
  let m = new Map(),
    result = []
  for (let i = 0; i < array.length; i++) {
    let x = target - array[i]
    if (m.get(x) !== undefined) {
      result = [m.get(x), i]
    } else {
      m.set(array[i], i)
    }
  }
  return result
}
// 递归
function createSum(count, result = []) {
  return (array, target) => {
    console.log('array, target:::', array, target, count, result)
    // let result = []
    if (count > 1) {
      count--
      for (var i = 0; i < array.length - 1; i++) {
        result.push(array[i])
        let sum = createSum(count, result),
          newTarget = target - array[i],
          newArray = array.slice(i + 1)
        let newResult = sum(newArray, newTarget)
        console.log('newResult:::', newResult, result, i)
        if (typeof newResult == 'number') {
          result.push(newResult)
          console.log('result::::::::::', result)
          return result
          // continue
        } else if (newResult == undefined) {
        } else {
          result = result.concat(newResult)
          // console.log(222, result)
        }
      }
    } else {
      let index = array.indexOf(target)
      console.log(111111, array, target)
      if (index != -1) {
        return array[index]
      } else {
        return undefined
      }
    }
    return result
  }
}

function twoSum3(array, target) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        res = [i, j]
      }
    }
  }
  return res
}
console.log(twoSum3([3, 2, 4, 1, 8], 5)) // [2,3]
