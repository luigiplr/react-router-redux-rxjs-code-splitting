import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import asyncRoute from './asyncRoute'

const HomePage = asyncRoute(() => import('./pages/home'))
const Page1 = asyncRoute(() => import('./pages/page1'), () => import('reducers/page1'))
const Page2 = asyncRoute(() => import('./pages/page2'), () => import('reducers/page2'))

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate='%s - React Router Redux RxJS chunk loading example'
        titleAttributes={{itemprop: 'name', lang: 'en'}}
      />

      <Switch>
        <Route exact path='/' component={HomePage} />

        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
      </Switch>
    </div>
  )
}
