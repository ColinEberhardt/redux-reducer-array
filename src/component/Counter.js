import React from 'react'

const Counter = props =>
  <div className={'redux' + (props.counter.warning ? ' warning' : '')} >
    <h1>{props.counter.value}</h1>
    <button onClick={props.incrementAction}>+</button>
    <button onClick={props.decrementAction}>-</button>
  </div>

export default Counter
