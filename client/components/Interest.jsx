import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getType} from '../actions/type'

class Interest extends React.Component {
  componentDidMount () {
    this.props.dispatch(getType(this.props.match.params.interest))
  }

  render () {
    return (
      <div className='interest-section'>
        <h1>{this.props.match.params.interest}</h1>
        {this.props.interestType.map(type => (
          <div key={type.type_id}>
            <Link to={`/interests/${this.props.match.params.interest}/${type.name}`}>
              <p>{type.name}</p>
            </Link>
            <div>
              <p>{type.description}</p>
            </div>
          </div>
        )
        )}
        <div>
          <Link to='/'>
            <button>Previous Page</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interestType: state.interestType
  }
}

export default connect(mapStateToProps)(Interest)
