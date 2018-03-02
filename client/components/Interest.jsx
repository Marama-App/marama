import React from 'react'
import { Link } from 'react-router-dom'
import {getType} from '../actions/type.js'
import {connect} from 'react-redux'

class Interest extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.dispatch(getType())
  }

  render () {
    return (
      <div className='interest-section'>
        <h1>Gaming</h1>
        {/* {this.state.type.map(type => (
          <div key={type.id}>
            <Link to={`/interests/${type.id}`}>
              <p>{type.name}</p>
            </Link>
            <div>
              <p>{type.description}</p>
            </div>
          </div>
        )
        )} */}

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
