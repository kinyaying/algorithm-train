/**
 * https://www.nowcoder.com/practice/fc897457408f4bbe9d3f87588f497729?tpId=117&tqId=37835&rp=1&ru=%2Fta%2Fjob-code-high&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
 * 给定一个数组由一些非负整数组成，现需要将他们进行排列并拼接，使得最后的结果最大，返回值需要是string类型 否则可能会溢出
 * [30,1] => 301
 */
function solve(nums) {
  if (nums.join('') === new Array(nums.length).fill(0).join('')) return '0'
  nums = nums.map((one) => (one = one + ''))
  sort(nums, (a, b) => {
    let len1 = a.length,
      len2 = b.length,
      temp = ''
    if (len1 !== len2) {
      if (len1 > len2) {
        temp = a.slice(0, len2)
        if (temp == b && a[len2 - 1] > a[len2]) {
          return a - b
        }
      } else if (len1 < len2) {
        temp = b.slice(0, len1)
        if (temp == a && b[len1 - 1] > b[len1]) {
          return a - b
        }
      }
    }
    return b > a ? 1 : -1
  })
  return nums.join('')
}

console.log(solve([91, 9, 100]))
/**
 *
 * @param {*} arr
 * @param {*} cb
 * @returns
 */
function sort(arr, compareFunction) {
  if (arr.length <= 1) return arr
  let start = 0,
    end = arr.length - 1,
    current = arr[start]
  while (start < end) {
    while (compareFunction(arr[end], current) > 0 && end > start) {
      end--
    }
    if (end == start) break
    arr[start] = arr[end]
    start++
    while (compareFunction(arr[start], current) < 0 && end > start) {
      start++
    }
    if (end == start) break
    arr[end] = arr[start]
    end--
  }
  arr[start] = current
  let left = arr.slice(0, start)
  let right = arr.slice(start + 1)
  return [
    ...sort(left, compareFunction),
    current,
    ...sort(right, compareFunction),
  ]
}
function compareFunction(a, b) {
  return a - b
}
console.log(sort([3, 2, 4, 6, 1], compareFunction)) // 1,2,3,4,6
// 3, 2, 4, 6, 1
// 1,2,4,6,
