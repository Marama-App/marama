import React from 'react'

import {connect} from 'react-redux'

import {getGrants} from '../actions/grants'

class Grants extends React.Component {
  componentDidMount () {
    this.props.dispatch(getGrants(this.props.match.params.grants))
  }

  render () {
    return (
      <div className='page-section'>
        <div className='typedetail-section'>
          <div className='page-title-font'>Grants for {this.props.match.params.grants}</div>
          {this.props.grants.result.map(grant => (
            <div key={grant.grants_id}>
              <h3>{grant.name}</h3>
              <div>
                <div className='p-class'>{grant.description}</div>
              </div>
              <button><a href={grant.link} target='_blank'>
                take me there
              </a>
              </button>
            </div>
          )
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    grants: state.grants
  }
}

export default connect(mapStateToProps)(Grants)
