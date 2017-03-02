import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'   
import YouTube from 'react-youtube'
import { togglePlay } from 'actions/page1'

function Page1({ isPlaying, togglePlay }) {
    return (
      <div>
        <Helmet title='Page 1' />
          
        <h1>Page 1</h1>
        <h2>Youtube Player</h2>
        <Link to='/'>Back Home</Link>
          
        <br/>
        <br/>

        <center>
            <YouTube
              videoId='YE7VzlLtp-4'
              onPlay={togglePlay}
              onPause={togglePlay}
            />

            <br />

            Video is {isPlaying ? 'Playing' : 'Paused'}
        </center>
      </div>
    )
}

Page1.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isPlaying: state.page1.playing
  }
}

export default connect(mapStateToProps, { togglePlay })(Page1)