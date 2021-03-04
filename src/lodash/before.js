/**
 * before的概念与after的使用方式相反，在未满足调用次数时会多次调用func方法
 *
 */
function before(n, func) {
  let result
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args)
    }
    if (n <= 1) {
      func = undefined
    }
    return result
  }
}

export default before
