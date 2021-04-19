/**
 * 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次
 */
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}
let task1 = async (timer, light) => {
  console.log(timer, light)
  new Promise((resolve) => {
    setTimeout(() => {
      if (light == 'red') {
        red()
      } else if (light == 'yellow') {
        green()
      } else if (light == 'green') {
        yellow()
      }
      resolve()
    }, timer)
  })
}

// 用 promise 实现
let task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      }
      if (light === 'green') {
        green()
      }
      if (light === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
    setTimeout(() => {
      console.log(1111)
    }, 5000)
  })
}
// let step = async (params) => {
//   await task(3000, 'red')
//   await task(2000, 'yellow')
//   await task(1000, 'green')
//   step()
// }
let step1 = async (params) => {
  while (true) {
    await task(3000, 'red')
    console.log(222)

    await task(2000, 'yellow')
    await task(1000, 'green')
  }
}

step1()


function data(){
  return {
    a:1,
    b:2
  }
}

function compile(){
  let {a,b} = data()
  return a+b
}
console.log('compile:',compile())

