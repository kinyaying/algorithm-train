function deepClone(obj, hashMap = new WeakMap()) {
  if (obj == null) {
    return obj
  } else if (obj instanceof Date || obj instanceof RegExp) {
    return obj
  }
  let newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (typeof obj[key] !== 'object') {
      newObj[key] = obj[key]
    } else {
      if (hashMap.has(obj[key])) {
        newObj[key] = hashMap.get(obj[key])
      } else {
        hashMap.set(obj[key], newObj)
        newObj[key] = deepClone(obj[key], hashMap)
      }
    }
  }
  return newObj
}
let a = { a: 1, b: 2, c: { c: 3 } }
a.a = a
let b = deepClone(a)
// a.c.c = 4
console.log(b)
