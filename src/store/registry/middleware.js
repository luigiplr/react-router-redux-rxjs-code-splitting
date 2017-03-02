import { isPlainObject } from 'lodash'

export const STORE_INJECT = Symbol('@@STORE_INJECT')

export default function registryMiddleware(registry) {
  return store => next => action => {
    if (isPlainObject(action) && action.hasOwnProperty(STORE_INJECT)) {
      const { reducers } = action[STORE_INJECT]

      if (reducers) {
        registry.injectReducers(reducers)
      }

      return
    }

    return next(action)
  }
}
