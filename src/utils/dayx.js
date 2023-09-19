import day from 'dayjs'
const prototype = Object.getPrototypeOf(day())
const yyy = dt => (dt.getFullYear() - 1911).toString().padStart(3, '0')
const getYYYMatch = str => str.match(/Y{4,}|Y{3}|[^Y{3}]+/g)

const dayx = new Proxy(day, {
  apply: function (target, thisArg, argumentsList) {
    if (!!argumentsList[1] && typeof argumentsList[1] == 'string') {
      const arg0 = argumentsList[0]
      const arg1 = argumentsList[1]
      let index = 0
      const matches = getYYYMatch(argumentsList[1])
      for (const match of matches) {
        if (match === 'YYY') {
          argumentsList[0] =
            arg0.substring(0, index) +
            (parseInt(arg0.substring(index, index + 3)) + 1911) +
            arg0.substring(index + 3)
          argumentsList[1] =
            arg1.substring(0, index) + 'YYYY' + arg1.substring(index + 3)
          break
        }
        index += match.length
      }
    }

    const result = Reflect.apply(target, thisArg, argumentsList)
    return new Proxy(result, handler)
  },
})
const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'age') return day().diff(receiver, 'years', false)
    if (prop === 'dte') return receiver.format('YYYMMDD')
    if (prop === 'tme') return receiver.format('HHmmss')
    // format
    if (prop === 'format')
      return format => {
        const format2 = getYYYMatch(format)
          .map(x => (x === 'YYY' ? yyy(target.$d) : x))
          .join('')
        return new day(target.$d).format(format2)
      }

    // Return the original property value
    if (typeof target[prop] !== 'function') return target[prop]
    // Wrap the original function with custom behavior
    return function (...args) {
      const result = target[prop].apply(target, args)
      const isReturnDayjs = Object.getPrototypeOf(result) === prototype
      return isReturnDayjs ? dayx(result, handler) : result
    }
  },
}
export default dayx
