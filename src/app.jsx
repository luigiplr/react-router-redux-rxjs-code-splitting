import 'babel-polyfill'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import createStore from './store'
import { Provider } from 'react-redux'
import App from 'components/app'

const store = createStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app_mountpoint')
)
