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
        <Link to='/:interest'>
          <button>Gaming</button>
        </Link>
      </div>
    )
  }
}

export default Interest
