import React from 'react'
import { connect } from 'react-redux'

import { incrementAction, decrementAction } from '../store/reducer'

const mapStateToProps = state => ({
  value: state
})

const mapDispatchToProps = dispatch => ({
  onIncrement() {
    dispatch(incrementAction())
  },
  onDecrement() {
    dispatch(decrementAction())
  }
})

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div className='redux'>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
