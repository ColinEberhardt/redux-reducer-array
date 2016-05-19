import React from 'react'
import { connect } from 'react-redux'

import Counter from './Counter'

const mapStateToProps = state => ({
  counters: state
})

const Counters = props =>
  <div className='container'>
    {props.counters.map(value =>
      <Counter onIncrement={()=>{}} onDecrement={()=>{}} counter={value}/>
    )}
  </div>

export default connect(mapStateToProps)(Counters)
