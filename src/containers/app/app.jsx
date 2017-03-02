import React from 'react'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import asyncRoute from '../asyncRoute'
import styles from './styles.css'

export default function App() {
  return (
    <div className={styles.app_wrapper}>
      <Helmet
        titleTemplate='%s - React Router Redux RxJS chunk loading example'
        titleAttributes={{itemprop: 'name', lang: 'en'}}
      />

      <div>
        <Route path='/' component={asyncRoute(() => import('../home'))} />
      </div>
    </div>
  )
}
