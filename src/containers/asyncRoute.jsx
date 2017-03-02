import React, { PureComponent, PropTypes } from 'react'
import { isArray } from 'lodash'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { injectReducers } from 'actions/registry'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/zip'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/observable/fromPromise'

const moduleDefaultExport = module => module.default || module

function esModule(module) {
  if (isArray(module)) {
    return module.map(moduleDefaultExport)
  }

  const defualted = moduleDefaultExport(module)
  return this.forceArray ? [defualted] : defualted
}

export default function asyncRoute(getComponent, getReducers) {
  return class AsyncRoute extends PureComponent {
    static contextTypes = {
      store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired
      })
    }

    static Component = null

    state = {
      Component: AsyncRoute.Component 
    }

    componentWillMount() {
      if (!this.state.Component) {
        this._componentWillUnmountSubject = new Subject()

        const { dispatch } = this.context.store
        const streams = [
          Observable.fromPromise(getComponent())
            .map(esModule)
            .takeUntil(this._componentWillUnmountSubject)
        ]

        if (getReducers) {
          streams.push(
            Observable.fromPromise(getReducers())
              .map(esModule.bind({ forceArray: true }))
              .map(reducers => dispatch(injectReducers(reducers)))
              .takeUntil(this._componentWillUnmountSubject)
          )
        }

        this._$loader = Observable
          .zip(...streams, Component => Component)
          .takeUntil(this._componentWillUnmountSubject)

        this._$loader.subscribe(Component => {
          AsyncRoute.Component = Component

          if (this._mounted) {
            this.setState({Component})
          } else {
            this.state.Component = Component
          }

          this._componentWillUnmountSubject.unsubscribe()
        })
      }
    }

    componentDidMount() {
      this._mounted = true
    }

    componentWillUnmount() {
      if (this._componentWillUnmountSubject && !this._componentWillUnmountSubject.closed) {
        this._componentWillUnmountSubject.onNext()
        this._componentWillUnmountSubject.unsubscribe()
      }
    }

    render() {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : null
    }
  }
}
