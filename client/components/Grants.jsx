import React from 'react'
// import {Link} from 'react-router-dom'
import request from 'superagent'

class Grants extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grants: []
    }
  }

  componentDidMount () {
    this.getGrants()
  }

  getGrants () {
    request
      .get('/api/v1/grants')
      .then((res) => {
        this.setState({
          grants: res.body.grants
        })
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.message)
      })
  }

  render () {
    return (
      <div className='Grants-section'>
        <h1>Mārama</h1>
        <h1>Hi!</h1>
        {/* {this.state.interests.map(interest =>
          <Link key={interest.id}to={`/${interest.interests}`}>
            <button>
              {interest.interests}
            </button>
          </Link>
        )} */}
      </div>
    )
  }
}

export default Grants
