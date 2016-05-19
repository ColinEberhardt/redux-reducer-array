const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

export const incrementAction = () => ({
  type: INCREMENT
})

export const decrementAction = () => ({
  type: DECREMENT
})

export const INITIAL_STATE = {
  value: 0,
  warning: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      state = update(state, { value: state.value + 1 })
      break
    case DECREMENT:
      state = update(state, { value: state.value - 1 })
      break
  }
  state = update(state, { warning: state.value > 5 })
  return state
}

export default reducer
