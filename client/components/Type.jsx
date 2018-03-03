import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getTypeDetail} from '../actions/type-details'

class Type extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      typeDetail: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getTypeDetail())
  }

  render () {
    return (
      <div className='type-section'>
        <h1>Type</h1>
        {this.props.typeDetails.map(detail => (
          <div key={detail.id}>
            <Link to={`/interests/${this.props.match.params.type}/${detail.id}`}>
              <h3>{detail}</h3>
              {/* this needs to change to detail.name later (once db is connected) */}
            </Link>
            <div>
              <p>{detail}</p>
              {/* this needs to change to detail.description later (once db is connected) */}
            </div>
          </div>
        )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    typeDetails: state.typeDetails
  }
}

export default connect(mapStateToProps)(Type)
