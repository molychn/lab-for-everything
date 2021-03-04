/**
 *
 * after的作用在于通过判断调用的次数来决定func是否可以被调用
 *
 */
function after(n, func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  n = n || 0
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}

export default after