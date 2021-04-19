// function add(num) {
//   function sum(arg) {
//     return num + arg
//   }
//   return sum
// }

function add(num = 0, sum = 0) {
  sum += num
  if (num == undefined) {
    return sum
  } else {
    return (num2) => add(num2, sum)
  }
}

function add1(a) {
  var num = function (b) {
    if (b) {
      //当后面传入有参数时，继续返回函数
      a = a + b
      return num
    } else {
      //当后面出入无参数时，返回值
      return a
    }
  }
  num.toString = function () {
    console.log('toString====')
    return a
  }
  return num
}

function add2(a) {
  var num = function (b) {
    a = a + b
    return num
  }
  num.valueOf = num.toString = function () {
    return a
  }
  //当引用类型需要转为字符串时，自动调用toString方法
  //当引用类型需要转为数字时，自动调用valueOf方法
  return num
}
console.log(Number(add2(3)(2)(0)))
