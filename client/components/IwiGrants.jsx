import React from 'react'

import {connect} from 'react-redux'

import { getIwiGrants } from '../actions/iwi-grants.js'

class IwiGrants extends React.Component {
  componentDidMount () {
    this.props.dispatch(getIwiGrants(this.props.match.params.IwiGrants))
  }

  render () {
    return (
      <div className='typedetail-section'>
        <h1>Iwi Grants</h1>
        {this.props.iwiGrants.map(iwiGrant => (
          <div key={iwiGrant.id}>
            <a href={iwiGrant.link} target='_blank'><h2>{iwiGrant.iwi}</h2></a>
          </div>
        ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    iwiGrants: state.iwiGrants
  }
}

export default connect(mapStateToProps)(IwiGrants)
