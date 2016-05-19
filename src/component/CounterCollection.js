import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from './Counter'
import AddCounter from './AddCounter'
import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { bindIndexToActionCreator, addCounterAction } from '../store/reducer'
import { incrementAction, decrementAction } from '../store/counterReducer'

const mapStateToProps = state => ({
  counters: state
})


const counterDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators({incrementAction, decrementAction}, index),
      dispatch)

const mapDispatchToProps = dispatch => ({
  addCounter() {
    dispatch(addCounterAction())
  },
  dispatch
})

const CounterCollection = props =>
  <div className='container'>
    {props.counters.map((value, index) =>
      <Counter counter={value}
        {...counterDispatchProperties(index)(props.dispatch)}/>
    )}
    <AddCounter addCounter={props.addCounter}/>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(CounterCollection)
