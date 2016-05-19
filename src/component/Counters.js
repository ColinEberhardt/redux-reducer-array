import React from 'react'
import { connect } from 'react-redux'

import Counter from './Counter'
import { bindIndexToActionCreator } from '../store/reducer'
import { incrementAction, decrementAction } from '../store/counterReducer'

const mapStateToProps = state => ({
  counters: state
})

const counterDispatchProperties =
  index =>
    dispatch => ({
      onDecrement() {
        dispatch(bindIndexToActionCreator(decrementAction, index)())
      },
      onIncrement() {
        dispatch(bindIndexToActionCreator(incrementAction, index)())
      }
    })

const Counters = props =>
  <div className='container'>
    {props.counters.map((value, index) =>
      <Counter counter={value}
        {...counterDispatchProperties(index)(props.dispatch)}/>
    )}
  </div>

export default connect(mapStateToProps)(Counters)
