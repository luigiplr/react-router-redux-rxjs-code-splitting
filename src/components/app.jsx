import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import asyncRoute from './asyncRoute'

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate='%s - React Router Redux RxJS chunk loading example'
        titleAttributes={{itemprop: 'name', lang: 'en'}}
      />

      <Switch>
        <Route exact path='/' component={asyncRoute(() => import('./pages/home'))} />

        <Route path='/page1' component={asyncRoute(() => import('./pages/page1'), () => import('reducers/page1'))} />
        <Route path='/page2' component={asyncRoute(() => import('./pages/page2'), () => import('reducers/page2'))} />
        <Route path='/page2' component={asyncRoute(() => import('./pages/page3'), () => import('reducers/page3'))} />
      </Switch>
    </div>
  )
}
