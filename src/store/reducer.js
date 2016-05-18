const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const incrementAction = () => ({
  type: INCREMENT
})

export const decrementAction = () => ({
  type: DECREMENT
})

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default reducer
