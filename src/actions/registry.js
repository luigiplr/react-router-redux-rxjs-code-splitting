import { STORE_INJECT } from 'store/registry/middleware'

export function injectReducers(reducers) {
  return { [STORE_INJECT]: { reducers } }
}
