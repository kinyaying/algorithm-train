/**
 * @param {number[]} nums
 * @return {number}
 */

var getSequence11 = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let last = nums[result[result.length - 1]],
      current = nums[i]
    if (current > last || last === undefined) {
      result.push(i)
    } else {
      // 当前项小于最后一项，二分查找+替换
      let start = 0,
        end = result.length - 1,
        middle
      while (start < end) {
        middle = Math.floor((start + end) / 2)
        if (nums[result[middle]] > current) {
          end = middle
        } else {
          start = middle + 1
        }
      }
      result[start] = i
    }
  }
  return result
}

function getSequence33(nums) { // 最终的结果是索引 
  const len = nums.length;
  const result = [0]; // 索引  递增的序列 用二分查找性能高
  const p = nums.slice(0); // 里面内容无所谓 和 原本的数组相同 用来存放索引
  let start;
  let end;
  let middle;
  for (let i = 0; i < len; i++) { // O(n)
      const arrI = nums[i];
      if (arrI !== 0) {
          let resultLastIndex = result[result.length - 1];
          // 取到索引对应的值
          if (nums[resultLastIndex] < arrI) {
              p[i] = resultLastIndex; // 标记当前前一个对应的索引
              result.push(i);
              // 当前的值 比上一个人大 ，直接push ，并且让这个人得记录他的前一个
              continue
          }
          // 二分查找 找到比当前值大的那一个
          start = 0;
          end = result.length - 1;
          while (start < end) { // 重合就说明找到了 对应的值  // O(logn)
              middle = ((start + end) / 2) | 0; // 找到中间位置的前一个
              if (nums[result[middle]] < arrI) {
                  start = middle + 1
              } else {
                  end = middle
              } // 找到结果集中，比当前这一项大的数
          }
          // start / end 就是找到的位置
          if (arrI < nums[result[start]]) { // 如果相同 或者 比当前的还大就不换了
              if (start > 0) { // 才需要替换
                  p[i] = result[start - 1]; // 要将他替换的前一个记住
              }
              result[start] = i;
          }
      }
  }
  let len1 = result.length // 总长度
  let last = result[len1 - 1] // 找到了最后一项
  while (len1-- > 0) { // 根据前驱节点一个个向前查找
      result[len1] = last
      last = p[last]
  }
  return result;
} 

var getSequence12 = function (nums) {
  let result = [],
    preIndex = []
  for (let i = 0; i < nums.length; i++) {
    let last = nums[result[result.length - 1]],
      current = nums[i]
    if (current > last || last === undefined) {
      // 当前项大于最后一项
      preIndex[i] = result[result.length - 1]
      result.push(i)
    } else {
      // 当前项小于最后一项，二分查找+替换
      let start = 0,
        end = result.length - 1,
        middle
      while (start < end) { // 重合就说明找到了 对应的值,时间复杂度O(logn)
        middle = Math.floor((start + end) / 2)// 找到中间位置的前一个
        if (nums[result[middle]] > current) {
          end = middle
        } else {
          start = middle + 1
        }
      }

      // 如果相同 或者 比当前的还大就不换了
      if (current < nums[result[start]]) {
        preIndex[i] = result[start - 1] // 要将他替换的前一个记住
        result[start] = i
      }
    }
  }
  // 利用前驱节点重新计算result
  let length = result.length, //总长度
    prev = result[length - 1] // 最后一项
  while (length-- > 0) {// 根据前驱节点一个个向前查找
    result[length] = prev
    prev = preIndex[result[length]]
  }
  return result
}

var lengthOfLIS = function (nums) {
  let res = [],
    prevIndexArr = nums.slice()
  for (let i = 0; i < nums.length; i++) {
    let lastOne = nums[res[res.length - 1]],
      current = nums[i]
    if (lastOne === undefined || lastOne < current) {
      // 当前项大于最后一项
      prevIndexArr[i] = res[res.length - 1]
      // console.log(i, res, prevIndexArr)

      res.push(i)
      // prevIndexArr.push(i - 1)
    } else {
      // 当前项小于最后一项，二分查找+替换
      let start = 0,
        end = res.length - 1,
        middle

      while (start < end) {
        middle = Math.floor((start + end) / 2)
        if (nums[res[middle]] > current) {
          end = middle
        } else {
          start = middle + 1
        }
      }

      // if (start === res.length - 1) {
      //   res[start] = current
      // }
      if (current < nums[res[start]]) {
        // 如果相同 或者 比当前的还大就不换了
        if (start > 0) {
          // 才需要替换
          prevIndexArr[i] = res[start - 1] // 要将他替换的前一个记住
        }
        // console.log('iii', i, start, res, prevIndexArr)

        res[start] = i
      }
      // res[start] = i
      // prevIndexArr[start] = res[start - 1]
    }
  }

  let len1 = res.length // 总长度
  let last = res[len1 - 1] // 找到了最后一项
  console.log(res)
  while (len1-- > 0) {
    console.log('len1:', len1)
    // 根据前驱节点一个个向前查找
    res[len1] = last
    last = prevIndexArr[last]
  }

  return res
}
let nums = [1, 4, 2, 5, 9, 0, 3, 6, 7, 8]
let num2 = [2, 3, 1, 5, 6, 8, 7, 9, 4]
let num3 = [10, 9, 2, 5, 3, 7, 101, 18]
console.log('lengthOfLIS:', lengthOfLIS(num2))
console.log('1:', getSequence12(num2))

function getSequence2(arr) {
  const len = arr.length
  const result = [0]
  const p = arr.slice()
  let resultLastIndex
  let start
  let end
  let middle = 0
  for (let i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      resultLastIndex = result[result.length - 1]
      if (arr[resultLastIndex] < arrI) {
        p[i] = resultLastIndex // 记录上一次
        result.push(i)
        continue
      }
      start = 0
      end = result.length - 1
      while (start < end) {
        middle = ((start + end) / 2) | 0
        if (arr[result[middle]] < arrI) {
          start = middle + 1
        } else {
          end = middle
        }
      }
      if (arrI < arr[result[start]]) {
        if (start > 0) {
          p[i] = result[start - 1] // 记录上一次
        }
        result[start] = i
      }
    }
    // console.log('start:', start)
    // let len = result.length
    // let last = result[len - 1]
    // while (start-- > 0) {
    //   // 倒序追溯
    //   result[start] = last
    //   last = p[last]
    // }
  }

  let len1 = result.length // 总长度
  let last = result[len1 - 1] // 找到了最后一项
  while (len1-- > 0) {
    // 根据前驱节点一个个向前查找
    result[len1] = last
    last = p[last]
  }
  return result
}

function getSequence3(arr) {
  // 最终的结果是索引
  const len = arr.length
  const result = [0] // 索引  递增的序列 用二分查找性能高
  const p = arr.slice(0) // 里面内容无所谓 和 原本的数组相同 用来存放索引
  let start
  let end
  let middle
  for (let i = 0; i < len; i++) {
    // O(n)
    const arrI = arr[i]
    if (arrI !== 0) {
      let resultLastIndex = result[result.length - 1]
      // 取到索引对应的值
      if (arr[resultLastIndex] < arrI) {
        p[i] = resultLastIndex // 标记当前前一个对应的索引
        result.push(i)
        // 当前的值 比上一个人大 ，直接push ，并且让这个人得记录他的前一个
        continue
      }
      // 二分查找 找到比当前值大的那一个
      start = 0
      end = result.length - 1
      while (start < end) {
        // 重合就说明找到了 对应的值  // O(logn)
        middle = ((start + end) / 2) | 0 // 找到中间位置的前一个
        if (arr[result[middle]] < arrI) {
          start = middle + 1
        } else {
          end = middle
        } // 找到结果集中，比当前这一项大的数
      }
      // start / end 就是找到的位置
      if (arrI < arr[result[start]]) {
        // 如果相同 或者 比当前的还大就不换了
        if (start > 0) {
          // 才需要替换
          p[i] = result[start - 1] // 要将他替换的前一个记住
        }
        result[start] = i
      }
    }
  }
  let len1 = result.length // 总长度
  let last = result[len1 - 1] // 找到了最后一项
  while (len1-- > 0) {
    // 根据前驱节点一个个向前查找
    console.log(len1)
    result[len1] = last
    last = p[last]
  }
  return result
}
console.log('=====', getSequence3(num2))

function getSequence1(nums) {
  let result = [0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[result[i]]) {
    }
  }
}
// 针对默认递增的序列进行优化
// console.log(getSequence1([1, 5, 8, 2]), 'my') //  [0,3,2]
