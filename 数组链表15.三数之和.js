/**
 * https://leetcode-cn.com/problems/3sum/
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
示例 1：

输入：nums = [-1,0,1,2,-1,-4]
[-4,-1,-1,0,1,2]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 
*/
/**
 * @param {number} count
 * @param {number} target
 * @return {function}
 */
var createThreeSum = function (target, count) {
  return (nums) => {
    console.log('result::::', target, nums, count)
    let result = []
    if (count > 1) {
      count--
      for (var i = 0; i < nums.length - 1; i++) {
        let newNums = [...nums.slice(0, i), ...nums.slice(i + 1)],
          newTarget = target - nums[i]

        let newResult = createThreeSum(newTarget, count)(newNums)
        let sum = newResult.length
          ? newResult.reduce((prev, next) => {
              return prev + next
            }, nums[i])
          : 0
        if (sum == target) {
          newResult.push(nums[i])
          console.log('newResult:::::', newResult, count)
          result = newResult
          // result.push(newResult)
        }
      }
    } else {
      let index = nums.indexOf(target)
      result = index != -1 ? [nums[index]] : []
      console.log('result:', result)
      // return result
    }
    return result
  }
}

var threeSum = createThreeSum(0, 3)
console.log(11111, threeSum([-1, 0, 1, 2, -1, -4]))
// [[-1,-1,2],[-1,0,1]]
