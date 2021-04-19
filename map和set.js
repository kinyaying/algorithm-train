/**
 * 1.https://leetcode-cn.com/problems/valid-anagram/
 *  有效的字母异位词
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false
  }
  let length = s.length
  let map = {}
  for (let i = 0; i < length; i++) {
    let letter = map[s[i]] || 0
    map[s[i]] = letter + 1
  }
  for (let i = 0; i < length; i++) {
    let letter = map[t[i]]
    if (--letter) {
      map[t[i]] = letter
    } else if (letter == 0) {
      delete map[t[i]]
    }
  }
  return Reflect.ownKeys(map).length > 0 ? false : true
}
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  s = s.split('').sort((n1, n2) => n1.charCodeAt() - n2.charCodeAt())
  t = t.split('').sort((n1, n2) => n1.charCodeAt() - n2.charCodeAt())
  console.log(s)
  if (s.join('') == t.join('')) {
    return true
  } else {
    return false
  }
}
var isAnagram1 = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  let start = 'a'.codePointAt(0)
  const table = new Array(26).fill(0)
  for (let i = 0; i < s.length; ++i) {
    table[s.codePointAt(i) - start]++
  }
  for (let i = 0; i < t.length; ++i) {
    table[t.codePointAt(i) - start]--
    if (table[t.codePointAt(i) - start] < 0) {
      return false
    }
  }
  return true
}
console.log(isAnagram2('anagram', 'nagaram'))
/**
 * https://leetcode-cn.com/problems/group-anagrams/
 * 49. 字母异位词分组
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = []
  for (let i = 0; i < strs.length; i++) {
    let current = strs[i],
      hasFind = false
    if (result.length > 0) {
      for (let j = 0; j < result.length; j++) {
        let arr = result[j]
        if (isAnagram(arr[0], current)) {
          arr.push(current)
          arr = arr.sort((a, b) => sortFunc(a, b))
          hasFind = true
        }
      }
      if (!hasFind) {
        result.push([current])
      }
    } else {
      result.push([current])
    }
  }
  return result
}

var groupAnagrams333 = function (strs) {
  const map = new Map()
  for (let str of strs) {
    let array = Array.from(str)
    array.sort()
    let key = array.toString()
    let list = map.get(key) ? map.get(key) : new Array()
    list.push(str)
    map.set(key, list)
  }
  return Array.from(map.values())
}
var groupAnagrams3 = function (strs) {
  let map = new Object()
  for (let i = 0; i < strs.length; i++) {
    let arr = new Array.from(strs[i])
    let key = arr.toString()
    if (map[key]) {
      map[key]
    } else {
      map[key] = strs[i]
    }
  }
}

console.log(
  '----,',
  groupAnagrams333(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
)

function sortFunc(a, b) {
  let index = 0
  while (index < a.length) {
    if (a.charCodeAt(index) == b.charCodeAt(index)) {
      index++
    } else {
      let res = a.charCodeAt(index) - b.charCodeAt(index)
      return res
    }
  }
}
