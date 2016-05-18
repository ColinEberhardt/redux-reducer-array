import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './store/reducer'
import Counter from './component/Counter'

const store = createStore(reducer)

// root component cannot be stateless functional components
// see: https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
// #the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <Counter/>
        </div>
      </Provider>
    )
  }
}
