import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

class Interest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: []
    }
  }

  componentDidMount () {
    this.getType()
  }

  getType () {
    request
      .get('/api/v1/interests/:id')
      .then((res) => {
        this.setState({
          type: res.body.type
        })
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.message)
      })
  }

  render () {
    return (
      <div className='interest-section'>
        <h1>Gaming</h1>
        {this.state.type.map(type => (
          <div key={type.id}>
            <Link to={`/interests/${type.id}`}>
              <p>{type.name}</p>
            </Link>
            <div>
              <p>{type.description}</p>
            </div>
          </div>
        )
        )}

      </div>
    )
  }
}

export default Interest
