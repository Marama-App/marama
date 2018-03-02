import React from 'react'
<<<<<<< HEAD
import {Link, Route} from 'react-router-dom'
import request from 'superagent'
=======
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getInterests } from '../actions/interests'
>>>>>>> 95bf6b6ed95f3ae77da9a0e0de476b322c16e193

import Interest from './Interest'

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
<<<<<<< HEAD
        {this.state.interests.map(interest =>
          <Link key={interest.id}to={`/interests/${interest.interests}`}>
            <button>
              {interest.interests}
            </button>
          </Link>
        )}
=======
        {interests.map(interest => {
          return (
            <Link key={interest.id} to={`/${interest.id}`}>
              <button>
                {interest.interests}
              </button>
            </Link>
          )
        })}
>>>>>>> 95bf6b6ed95f3ae77da9a0e0de476b322c16e193
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
