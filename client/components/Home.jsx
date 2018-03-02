import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getInterests } from '../actions/interests'

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
    const interests = this.props.interests.interests
    if (!interests) {
      return null
    }
    return (
      <div className='home-section'>
        {interests.map(interest => {
          return (
            <Link key={interest.id} to={`/${interest.id}`}>
              <button>
                {interest.interests}
              </button>
            </Link>
          )
        })}
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
