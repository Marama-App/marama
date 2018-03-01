import React from 'react'
import {Link} from 'react-router-dom'
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
      .get('/api/v1/interests:1')
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
        {/* <h1>{interest}</h1> */}
        <Link to='/:interest/:type'>
          Animation
          {type}
        </Link>
        <p>
          Blurb about animation
          {/* {data.animation.description} */}
        </p>
        <Link to='/:interest/:type'>
          Coding
          {/* {infotype} */}
        </Link>
        <p>
          Blurb about Coding
          {/* {infotype.blurb} */}
        </p>
        <Link to='/:interest/:type'>
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
