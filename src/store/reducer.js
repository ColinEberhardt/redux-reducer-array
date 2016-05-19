import counterReducer, { INITIAL_STATE as COUNTER_INITIAL_STATE } from './counterReducer'

const ADD_COUNTER = 'counters/ADD_COUNTER'

export const addCounterAction = () => ({
  type: ADD_COUNTER
})

const INITIAL_STATE = [
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE
]

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type.startsWith('counter/')) {
    return [
      ...state.slice(0, action.index),
      counterReducer(state[action.index], action),
      ...state.slice(action.index + 1)
    ]
  }
  switch (action.type) {
    case ADD_COUNTER:
      return [
        ...state,
        COUNTER_INITIAL_STATE
      ]
  }
  return state
}

export default reducer
