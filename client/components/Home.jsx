import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getInterests } from '../actions/interests'

// import Interest from './Interest'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      interests: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getInterests())
  }

  render () {
    const interests = this.props.interests
    if (!interests) {
      return null
    }
    return (
      <div className='home-section'><img src='/images/final-bg-more-red.jpg' className='home-background'/>
        <div className='home-content-box'>

          <div className='home-blurb'>Hey! What do you <br/> love doing?</div>
          <div className='home-sentence'>Tell us what you're into, and we'll tell you how to get there.</div>
          <div className='home-button-container'>
            <div>
              {this.props.interests.map(interest =>
                <Link key={interest.id}to={`/interests/${interest.interests}`}>
                  <button className='home-buttons'>
                    {interest.interests}
                  </button>
                </Link>
              )}
              <div>
                <Link to='/not-sure'><button className='home-buttons'>Not sure?</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interests: state.interests
  }
}

export default connect(mapStateToProps)(Home)
