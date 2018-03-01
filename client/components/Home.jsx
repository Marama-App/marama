import React from 'react'
import request from 'superagent'

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
      <div className='home section'>
        <h1>Mārama</h1>
        <ul>
          {this.state.interests.map(interest =>
            <li key={interest.id}>{interest.interests}</li>
          )}
        </ul>

      </div>
    )
  }
}

export default Home
