function jsonp(url, cb = 'callback', cbFn) {
  url += '?' + cb + '=callback'
  let scriptDOM = document.createElement('script')
  scriptDOM.src = url
  document.body.appendChild(scriptDOM)
  window.callback = callback
}
jsonp('https://www.jianshu.com', 'jsonpCallback', (value) => {
  console.log(value)
})

// let p = async function (params) {
//   return new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(1)
//   })
// }
// const res = await p

// console.log(res)
