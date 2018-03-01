import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

class Interest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      typeInfo: []
    }
  }

  componentDidMount () {
    this.getTypeInfo()
  }

  getTypeInfo () {
    request
      .get('/api/v1/interests/:id')
      .then((res) => {
        this.setState({
          typeInfo: res.body.typeInfo
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
        {this.state.typeInfo.map(typeInfo => (
          <div key={typeInfo.id}>
            <Link to={`/interests/${typeInfo.id}`}>
              <p>{typeInfo.name}</p>
            </Link>
            <div>
              <p>{typeInfo.description}</p>
            </div>
          </div>
        )
        )}
      </div>
    )
  }
}

export default Interest
