function retry(fn, times) {
  return new Promise((resolve, reject) => {
    function newFn() {
      fn()
        .then(resolve)
        .catch((err) => {
          if (times > 0) {
            times--
            newFn()
          } else {
            reject(err)
          }
        })
    }
    newFn()
  })
}
let i = 0
function fn() {
  return new Promise(function (resolve, reject) {
    //   setTimeout(function() {
    console.log('fn')
    if (i < 2) {
      reject('server unavailable')
      i++
    } else {
      resolve(1)
    }
    // reject('server unavailable')

    //   }, 500);
  })
}

retry(fn, 3).then((res) => {
  console.log(res)
})
