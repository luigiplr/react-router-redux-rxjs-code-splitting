import { combineReducers } from 'redux'
import { omit } from 'lodash'
import { reducersInjected, currentlyInjected } from 'actions/registry'

export default class Registry {
  constructor(baseReducers) {
    this._reducers = baseReducers
  }

  store = null

  injectReducers(reducers) {
    const newReducers = omit(
      reducers.reduce((acc, reducer) => {
        acc[reducer.reducer] = reducer
        return acc
      }, {}),
      Object.keys(this._reducers)
    )

    Object.assign(this._reducers, newReducers)

    this.store.replaceReducer(combineReducers(this._reducers))
  }

  get initialReducers() {
    return combineReducers(this._reducers)
  }
}

function mapReducerNameToImport(reducer) {
  switch(reducer) {
    case 'page2':
      return import('reducers/page2')
    case 'page3':
      return import('reducers/page3')
  }
}
