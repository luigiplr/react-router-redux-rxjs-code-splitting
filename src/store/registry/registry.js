import { combineReducers } from 'redux'
import { reducersInjected, currentlyInjected } from 'actions/registry'

export default class Registry {
  constructor(baseReducers) {
    this._reducers = baseReducers
  }

  store = null

  injectReducers(reducers) {
    Object.assign(
      this._reducers,
      reducers.reduce((acc, reducer) => {
        acc[reducer.reducer] = reducer
        return acc
      }, {})
    )

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
