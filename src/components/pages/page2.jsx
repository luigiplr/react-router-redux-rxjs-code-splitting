import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { page2Increment, page2Decrement } from 'actions/page2'

function Page2({ state, increment, decrement }) {
  return (
    <div>
      <Helmet title='Page 2' />

      <h1>Page 2</h1>
      <h2>Counter</h2>
      <Link to='/'>Back Home</Link>
      
      <center>
        <p>Current State: {state}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={!state}>Decrement</button>
       </center>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state.page2
  }
}

export default connect(
  mapStateToProps,
  {
    increment: page2Increment,
    decrement: page2Decrement
  }
)(Page2)