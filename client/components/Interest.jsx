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
        <h1>Gaming</h1>
        {/* <h1>{interest}</h1> */}
        <Link to='/:interest/:type'>
          Animation
          {/* {infotype} */}
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
