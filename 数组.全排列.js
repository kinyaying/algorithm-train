/**
 * https://leetcode-cn.com/problems/permutations/
 * 
 * 输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

var permute = function (nums) {
  if (nums.length <= 1) return [nums]
  let array = [],
    newNums = [],
    newArrray = [],
    temp = []
  for (let i = 0; i < nums.length; i++) {
    newNums = [...nums.slice(0, i), ...nums.slice(i + 1)]
    newArrray = permute(newNums)
    for (let j = 0; j < newArrray.length; j++) {
      temp = [nums[i]].concat(newArrray[j])
      array.push(temp)
    }
  }
  return array
}

console.log(permute([1]))
