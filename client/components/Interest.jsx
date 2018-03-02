import React from 'react'
// import { Link } from 'react-router-dom'
// import {getType} from '../actions/type.js'
import {connect} from 'react-redux'

class Interest extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='interest-section'>
        <h1>Header</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type
  }
}

export default connect(mapStateToProps)(Interest)
// export default Interest
