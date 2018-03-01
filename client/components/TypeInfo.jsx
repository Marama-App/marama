import React from 'react'
import {Link} from 'react-router-dom'

class TypeInfo extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  // componentDidMount () {
  //   this.getTypeInfoInfo()
  // }

  render () {
    return (
      <div className='typeinfo-section'>
        <h1> Animation
        {/* {TypeInfo} */}
        </h1>
        <Link to='/study'>
          Study
          {/* {infodetail} */}
        </Link>
        <p>
          Blurb about study
          {/* {data.animation.description} */}
        </p>
        <Link to='/jobs'>
          Jobs
          {/* {infodetail} */}
        </Link>
        <p>
          Blurb about jobs
          {/* {infodetail.blurb} */}
        </p>
        <Link to='/help'>
          Help
          {/* {infodetail} */}
        </Link>
        <p>
          Blurb about Help
          {/* {infodetail.blurb} */}
        </p>
      </div>
    )
  }
}

export default TypeInfo
