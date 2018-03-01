import React from 'react'
import {Link} from 'react-router-dom'

class Interest extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  // componentDidMount () {
  //   this.getInterestInfo()
  // }

  render () {
    return (
      <div className='interest-section'>
        <h1>Mārama</h1>
        <Link to='/:id'>
          Animation
          {/* {infotype} */}
        </Link>
        <p>
          Blurb about animation
          {/* {infotype.blurb} */}
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
