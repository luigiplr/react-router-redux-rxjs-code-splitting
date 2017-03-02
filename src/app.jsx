import 'babel-polyfill'

import React from 'react'
import { HashRouter } from 'react-router-dom'
import { render } from 'react-dom'
import createStore from './store'
import { Provider } from 'react-redux'
import App from 'components/app'

render(
  <Provider store={createStore()}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app_mountpoint')
)
