import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Page1() {
  return (
    <div>
      <Helmet title='Page 1' />

      <h1>Page 1</h1>
      <Link to='/'>Back Home</Link>
    </div>
  )
}