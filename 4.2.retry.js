/**
 * 实现一个retry方法
 * @param function 任意一个函数
 * @param n 重复次数
 * @returns 带重试功能的函数
 */

 function retry(fn, n) {
     if (fn.constructor === Promise) {
        return new Promise(function (resolve, reject) {
            //  while(n > 0) {
            //      console.log('n:', n)
            //      n--
                 
            //      fn.then(function() {
            //         resolve(...arguments)
            //      }).catch(reject)

            //  }
             const promiseArr = []
             while(n > 0) {
                n--
                promiseArr.push(fn)
             }
             Promise.all([...promiseArr])
        })
        
     }
 }
 var testFn = new Promise(function (resolve, reject) {
     console.log('testFn=====')
    resolve('111')
 })
//  testFn.then(res => {
//      console.log('res:::', res)
//  })
 var func = retry(testFn, 3)
 func.then(res => {
     console.log('testFn::', res)
 })