import React from 'react'
import { connect } from 'react-redux'

import { incrementAction, decrementAction } from '../store/counterReducer'

const mapStateToProps = state => ({
  counter: state
})

const mapDispatchToProps = dispatch => ({
  onIncrement() {
    dispatch(incrementAction())
  },
  onDecrement() {
    dispatch(decrementAction())
  }
})

const Counter = props => (
  <div className={'redux' + (props.counter.warning ? ' warning' : '')} >
    <h1>{props.counter.value}</h1>
    <button onClick={props.onIncrement}>+</button>
    <button onClick={props.onDecrement}>-</button>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
