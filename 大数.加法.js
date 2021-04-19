/**
 * 43. 字符串相加
 * https://www.nowcoder.com/practice/11ae12e8c6fe48f883cad618c2e81475?tpId=117&tqId=37842&rp=1&ru=%2Fta%2Fjob-code-high&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
 * 以字符串的形式读入两个数字，编写一个函数计算它们的和，以字符串形式返回。
 * 输入："1","99"
 * 输出："100"
 */

function solve(str1, str2) {
  let res = [],
    i = str1.length - 1,
    j = str2.length - 1,
    preserve = ''
  while (i >= 0 && j >= 0) {
    res[i] = parseInt(str1[i]) + parseInt(str2[j])
    if (i == 0) {
      preserve = str2.slice(0, j)
    }
    if (j == 0) {
      preserve = str1.slice(0, i)
    }
    i--
    j--
  }

  let result = preserve.split('')
  result = result.concat(res)
  i = result.length - 1
  while (i >= 1) {
    let n = result[i] - '0'
    if (n >= 10) {
      result[i - 1] = parseInt(result[i - 1]) + parseInt(n / 10)
      result[i] = n % 10
    }
    i--
  }
  return result.join('')
}
console.log(solve('733064366', '459309139')) // "1192373505"
