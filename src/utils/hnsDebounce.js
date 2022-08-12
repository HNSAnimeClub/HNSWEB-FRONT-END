/**
 * @name: hnsDebounce
 * @author: 米洛
 * @date: 2022-06-26 23:23
 * @description：防抖函数
 */

// 一段时间内多次执行只取最后一次的结果
export const debounce = (callBack, delay) => {
  let time = null
  return function (...args) {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      callBack.apply(this, args)
    }, delay)
  }
}

// 一段时间内多次执行只取第一次的结果
export const debounceReverse = (callBack, delay) => {
  let time = null
  return function () {
    let context = this, args = arguments, allowCall = !time
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      time = null
    }, delay)
    if (allowCall) callBack.apply(context, args)
  }
}

