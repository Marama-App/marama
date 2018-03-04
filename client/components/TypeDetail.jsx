import React from 'react'

import {connect} from 'react-redux'

import {getGrants} from '../actions/grants'
import {Link} from 'react-router-dom'

class TypeDetail extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.dispatch(getGrants(this.props.match.params.typeDetails))
  }

  render () {
    return (
      <div className='typedetail-section'>
        <h1>TypeDetail</h1>
        {this.props.grants.result.map(grant => (
          <div key={grant.grants_id}>
            <a href={grant.link} target='_blank'>
              <h3>{grant.name}</h3>
            </a>
            <div>
              <p>{grant.description}</p>
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
