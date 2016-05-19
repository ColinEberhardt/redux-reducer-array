const transformObjectValues = (obj, fn) => {
  var transformed = {}
  Object.keys(obj).forEach(key => {
    transformed[key] = fn(obj[key])
  })
  return transformed
}

const bindActionCreator = (actionCreator, index) =>
  (...args) => Object.assign(actionCreator(...args), { index })

const bindActionCreatorMap = (creators, index) =>
  transformObjectValues(creators, actionCreator => bindActionCreator(actionCreator, index))

const bindIndexToActionCreators = (actionCreators, index) => {
  return typeof actionCreators === 'function'
    ? bindActionCreator(actionCreators, index)
    : bindActionCreatorMap(actionCreators, index)
}

export default bindIndexToActionCreators
