/**
 * https://leetcode-cn.com/problems/rotate-array/
 */

var rotate = function (nums, k) {
  let length = nums.length
  if (length == k || k == 0) return nums
  if (length < k) {
    k = k - length
  }
  let rightArrs = nums.splice(k + 1, length)
  nums = rightArrs.concat(nums)
  return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
