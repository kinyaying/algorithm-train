// var getNumbers = () => {
//   return Promise.resolve([1, 2, 3])
// }
// var multi = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num) {
//         resolve(num * num)
//       } else {
//         reject(new Error('num not specified'))
//       }
//     }, 1000)
//   })
// }
// async function test() {
//   var nums = await getNumbers()
//   console.log('nums::', nums)
//   nums.forEach(async (x) => {
//     var res = await multi(x)
//     console.log(res)
//   })
// }
// test()

// ;(async function () {
//   let r = await p(1)
//   console.log(r)

// })()
// p(1).then((res) => {
//   console.log(res)
// })

function p(i) {
  return new Promise((resolve, reject) => {
    console.log('promise', i)
    resolve('success')
  })
}
async function test1() {
  for (var i = 0; i < 5; i++) {
    await p(i)
    console.log(i)
  }
}
// test1()

function test() {
  for (var i = 0; i < 5; i++) {
    p(i).then(() => {
      console.log(i)
    })
  }
}
test()
