/**
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 * 统计一个数字在排序数组中出现的次数。
 */
//[8, 9, 10], 11
var search = function (nums, target) {
  let times = 0,
    start = 0,
    end = nums.length - 1,
    index = 0,
    hasNumber = false
  while (start <= end) {
    if (start == end && end == nums.length - 1) break
    if (start == end && start == 0) break
    index = Math.floor((start + end) / 2)
    console.log('start <= end:', index, start, end)
    if (nums[index] < target) {
      start = index
    } else if (nums[index] > target) {
      end = index
    } else {
      hasNumber = true
      break
    }
  }
  console.log(hasNumber, index)
  // if (hasNumber) {
  //   times++
  //   let index1 = (index2 = index)
  //   while (start < index1) {
  //     index1--
  //     if (nums[index1] == target) {
  //       times++
  //     } else {
  //       break
  //     }
  //   }
  //   while (start < end) {
  //     index2++
  //     if (nums[index2] == target) {
  //       times++
  //     } else {
  //       break
  //     }
  //   }
  // }

  return times
}

var search1 = function (nums, target) {
  function BinaySearch(nums, left, right) {
    if (left > right) {
      return -1 // 找不到
    }
    let mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      // 在左侧
      return BinaySearch(nums, left, mid - 1)
    } else if (target > nums[mid]) {
      // 在右侧
      return BinaySearch(nums, mid + 1, right)
    } else {
      // 找到了
      return mid
    }
  }
  let count = 0
  let targetIdx = BinaySearch(nums, 0, nums.length - 1)
  if (targetIdx !== -1) {
    count++
  } else {
    return count
  }
  // 找它左边和右边就行
  let leftIdx = targetIdx - 1
  while (nums[leftIdx] === nums[targetIdx]) {
    count++
    leftIdx--
  }
  let rightIdx = targetIdx + 1
  while (nums[rightIdx] === nums[targetIdx]) {
    count++
    rightIdx++
  }
  return count
}

var search2 = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    index = -1
  while (left <= right) {
    index = parseInt((right + left) / 2)
    if (nums[index] == target) {
      break
    } else if (nums[index] < target) {
      left = index + 1
    } else if (nums[index] > target) {
      right = index - 1
    }
  }
  if (nums[index] == target) {
    let l = index - 1,
      r = index + 1
    while (nums[l] == target && l >= 0) {
      l--
    }
    while (nums[r] == target && r <= nums.length - 1) {
      r++
    }
    return r - l - 1
  }
  return -1
}
//有一个[排序](https://ac.nowcoder.com/jump/super-jump/word?word=排序)数组，返回第一个比目标数字小的数，要求log(n)

var search3 = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    index = -1
  while (left <= right) {
    index = parseInt((right + left) / 2)
    if (nums[index] == target) {
      break
    } else if (nums[index] < target) {
      left = index + 1
    } else if (nums[index] > target) {
      right = index - 1
    }
  }
  console.log(left, right, index)
  if (index == 0) {
    if (nums[index] >= target) {
      return null
    } else {
      return nums[index]
    }
  }
  if (nums[index] === target) {
    return nums[index - 1]
  } else if (nums[index] > target) {
    return nums[index - 1]
  } else if (nums[index] < target) {
    return nums[index]
  }
}

// console.log(search3([8, 11, 12, 18, 99], 10))
