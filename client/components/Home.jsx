import React from 'react'
import {Link, Route} from 'react-router-dom'
import request from 'superagent'

import Interest from './Interest'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      interests: []
    }
  }

  componentDidMount () {
    this.getHome()
  }

  getHome () {
    request
      .get('/api/v1/home')
      .then((res) => {
        this.setState({
          interests: res.body.interests
        })
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.message)
      })
  }

  render () {
    return (
      <div className='home-section'>
        {this.state.interests.map(interest =>
          <Link key={interest.id}to={`/interests/${interest.interests}`}>
            <button>
              {interest.interests}
            </button>
          </Link>
        )}
      </div>

    )
  }
}

export default Home
