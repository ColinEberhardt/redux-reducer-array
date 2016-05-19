import { INITIAL_STATE as COUNTER_INITIAL_STATE } from './counterReducer'

const INITIAL_STATE = [
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE
]

const reducer = (state = INITIAL_STATE, action) => state

export default reducer
