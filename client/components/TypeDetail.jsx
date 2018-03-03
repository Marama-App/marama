import React from 'react'

import {connect} from 'react-redux'

import {getGrants} from '../actions/grants'
import {Link} from 'react-router-dom'

class TypeDetail extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.dispatch(getGrants())
  }

  render () {
    return (
      <div className='typedetail-section'>
        <h1>TypeDetail</h1>
        {this.props.grants.map(grant => (
          <div key={grant.id}>
            <Link to={`/interests/${this.props.match.params.detail}/${grant.id}`}>
              <h3>{grant}</h3>
              {/* this needs to change to grant.name later (once db is connected) */}
            </Link>
            <div>
              <p>{grant}</p>
              {/* this needs to change to grant.description later (once db is connected) */}
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
    grants: state.grants
  }
}

export default connect(mapStateToProps)(TypeDetail)
