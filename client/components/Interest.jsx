import React from 'react'
import {Link} from 'react-router-dom'
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
      .get('/api/v1/interests:1')
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
        <Link to='/:id'>
          Animation
          {typeInfo}
        </Link>
        <p>
          Blurb about animation
          {/* {data.animation.description} */}
        </p>
        <Link to='/:id'>
          Coding
          {/* {infotype} */}
        </Link>
        <p>
          Blurb about Coding
          {/* {infotype.blurb} */}
        </p>
        <Link to='/:id'>
          Sound
          {/* {infotype} */}
        </Link>
        <p>
          Blurb about Sound
          {/* {infotype.blurb} */}
        </p>
      </div>
    )
  }
}

export default Interest
